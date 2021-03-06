const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const vscode = require('vscode');
const rimraf = require('rimraf');

const SnowManager = require('./SnowManager');
const CONSTANTS = require('./Constants');

class SyncManager {
    constructor(register) {
        this.register = register;
        this.configurationUpdateHandler(JSON.parse(fs.readFileSync(CONSTANTS.CONFIG_PATH)));
    }

    configurationUpdateHandler(config) {
        this.snowManager = new SnowManager(config);
    }

    initialize(typeDefinitionPath) {
        // initialize the project
        var fileStream = fs.createWriteStream(CONSTANTS.JSON_CONFIG_PATH);
        fileStream.write(JSON.stringify({
            "compilerOptions": {
                "target": "es5"
            },
            "exclude": [
                "node_modules"
            ]
        }, null, 4));
        fileStream.end();
        fsExtra.copySync(typeDefinitionPath, CONSTANTS.TYPE_DIR_PATH);
    }

    _cleanupEmptyDirectories(dir) {
        let files = fs.readdirSync(dir);
        files.forEach((d) => {
            if (fs.statSync(path.join(dir, d)).isDirectory()) {
                this._cleanupEmptyDirectories(path.join(dir, d));
            }
        });
        files = fs.readdirSync(dir);
        if (files.length == 0) {
            fs.rmdirSync(dir);
            return;
        }
    }

    _createFiles(item, rootPath, current = null) {
        return new Promise((resolve, reject) => {
            var queries = [];
            if (item.query != undefined) {
                var parsedQuery = item.query.replace(/\$\{([\w\.]+)\}/g, (match) => {
                    let key = match.substr(2, match.length - 3);
                    return current[key];
                });
                queries.push(parsedQuery);
            }
            this.snowManager.getAllRows(item.table, queries).then((rows) => {
                if (!rows)
                    return console.error('Could not fetch', item);
                rows.map((row) => {
                    var filePath = path.join(rootPath, [row[item.name], item.ext].join('.'));
                    this.register.add(filePath, row, item);
                });
                resolve();
            }).catch((reason) => {
                reject(reason);
            });
        })
    }

    _createFile(item, rootPath, current = null) {
        var filePath = path.join(rootPath, [item.name, item.ext].join('.'));
        if (item.table == 'current') {
            item.table = current.sys_class_name;
        }
        this.register.add(filePath, current, item);
    }

    async _createDirectories(item, rootPath, current = null) {
        var queries = [];
        if (item.query != undefined) {
            var parsedQuery = item.query.replace(/\$\{([\w\.]+)\}/g, (match) => {
                let key = match.substr(2, match.length - 3);
                return current[key];
            });
            queries.push(parsedQuery);
        }
        let rows = await this.snowManager.getAllRows(item.table, queries);
        for (let row of rows) {
            row.table = item.table; // add table name; to be used later
            var currentPath = path.join(rootPath, row[item.name]);
            if (!fs.existsSync(currentPath))
                fs.mkdirSync(currentPath);
            for (let subItem of item.contains) {
                if (subItem.type == 'directory')
                    await this._createDirectory(subItem, currentPath, row);
                else if (subItem.type == 'file')
                    this._createFile(subItem, currentPath, row);
                else if (subItem.type == 'files')
                    this.downloading_files.push(this._createFiles(subItem, currentPath, row));
            }
        }
    }

    async _createDirectory(item, rootPath, current = null) {
        const currentPath = path.join(rootPath, item.name);
        if (!fs.existsSync(currentPath))
            fs.mkdirSync(currentPath);
        for(let subItem of item.contains) {
            if (subItem.type == 'files')
                this.downloading_files.push(this._createFiles(subItem, currentPath, current));
            else if (subItem.type == 'file')
                this._createFile(subItem, currentPath, current);
            else if (subItem.type == 'directories')
                await this._createDirectories(subItem, currentPath, current);
            else if (subItem.type == 'directory')
                await this._createDirectory(subItem, currentPath, current);
        }
    }

    async importAll(fileMap) {
        vscode.window.setStatusBarMessage('IglooReloaded: Importing files...');
        vscode.window.showInformationMessage('IglooReloaded: Import has been started.');
        rimraf(CONSTANTS.OUT_DIR, async (err) => {
            try{
                if (!err) {
                    if (!fs.existsSync(CONSTANTS.OUT_DIR))
                        fs.mkdirSync(CONSTANTS.OUT_DIR);
                    this.downloading_files = [];
                    for (let item of fileMap) {
                        if (item.type == "directory") {
                            await this._createDirectory(item, CONSTANTS.OUT_DIR);
                        }
                    }
                    Promise.all(this.downloading_files).then(() => {
                        this._cleanupEmptyDirectories(CONSTANTS.ROOT_DIR);
                        this.register.commitFile('.');
                        vscode.window.setStatusBarMessage('IglooReloaded: Ready');
                        vscode.window.showInformationMessage('All files imported successfully.');
                        return;
                    }).catch((e) => {
                        console.error(e);
                    });
                    return;
                }
            } catch(e) {
                console.error(e);
            }
            vscode.window.setStatusBarMessage('IglooReloaded: Ready');
            vscode.window.showErrorMessage('Something went wrong. Check logs.');
        });
    }

    importSingle(currentPath) {
        var registerEntry = this.register.get(currentPath);
        if (registerEntry == undefined)
            return;
        vscode.window.showQuickPick(['Confirm Import', 'Compare with local', 'Abort']).then(
            pick => {
                if (pick == 'Confirm Import') {
                    this.snowManager
                        .getSingleRow(registerEntry.table, registerEntry.sys_id)
                        .then((row) => {
                            this.register.put(currentPath, row);
                            this.register.commitFile(currentPath);
                            vscode.window.showInformationMessage('File imported from remote successfully.');
                        });
                } else if (pick == 'Compare with local') {
                    this.showDiff(currentPath);
                } else {
                    vscode.window.showInformationMessage('Action aborted by user.');
                }
            },
            err => {
                vscode.window.showErrorMessage('Something went wrong. Check logs.');
                console.error(err);
            }
        );
    }

    _exportAndCommit(currentPath, registerEntry, localContent) {
        this.snowManager
            .updateField(
                registerEntry.table,
                registerEntry.sys_id,
                registerEntry.column,
                localContent
            ).then((row) => {
                registerEntry.sys_updated_on = row.sys_updated_on;
                this.register.putEntry(currentPath, registerEntry);
                this.register.commitFile(currentPath);
                vscode.window.showInformationMessage('File exported successfully.');
            });
    }

    async exportSingle(currentPath) {
        var registerEntry = this.register.get(currentPath);
        try {
            vscode.window.showQuickPick(['Confirm Export', 'Compare with remote', 'Abort']).then(
                async pick => {
                    if (pick == 'Confirm Export') {
                        let remoteRow = await this.snowManager.getSingleRow(registerEntry.table, registerEntry.sys_id);
                        let localContent = fs.readFileSync(currentPath).toString();
                        console.log(remoteRow.sys_updated_on, registerEntry.sys_updated_on);
                        if (remoteRow.sys_updated_on != registerEntry.sys_updated_on) {
                            vscode.window.showWarningMessage('Remote file may have been modified.');
                            vscode.window.showQuickPick(['Export Anyway', 'Compare with remote', 'Abort']).then(
                                secondPick => {
                                    if (secondPick == 'Export Anyway') {
                                        this._exportAndCommit(currentPath, registerEntry, localContent);
                                    } else if (secondPick == 'Compare with remote') {
                                        this.showDiff(currentPath);
                                    } else {
                                        vscode.window.showInformationMessage('Action aborted by user.');
                                    }
                                },
                                err => {
                                    vscode.window.showErrorMessage('Something went wrong. Check logs.');
                                    console.error(err);
                                }
                            )
                        } else {
                            this._exportAndCommit(currentPath, registerEntry, localContent);
                        }
                       
                    } else if (pick == 'Compare with remote') {
                        this.showDiff(currentPath);
                    } else {
                        vscode.window.showInformationMessage('Action aborted by user.');
                    }
                },
                err => {
                    vscode.window.showErrorMessage('Something went wrong. Check logs.');
                    console.error(err);
                }
            );
        } catch (e) {
            vscode.window.showErrorMessage('Something went wrong. Check logs.');
            console.error(e);
        }
    }

    showDiff(currentPath) {
        var registerEntry = this.register.get(currentPath);
        if (registerEntry == undefined)
            return;
        vscode.window.showQuickPick(['Remote ↔ Local', 'Local ↔ Remote']).then(
            pick => {
                if (pick == undefined) {
                    vscode.window.showInformationMessage('Action aborted by user.');
                    return;
                }
                this.snowManager
                    .getSingleRow(registerEntry.table, registerEntry.sys_id)
                    .then((row) => {
                        vscode.workspace.openTextDocument({
                            content: row[registerEntry.column],
                            language: 'javascript'
                        }).then((document) => {
                            let leftUri = vscode.window.activeTextEditor.document.uri, rightUri = document.uri;
                            if (pick == 'Remote ↔ Local')
                                [leftUri, rightUri] = [rightUri, leftUri];
                            vscode.commands.executeCommand(
                                'vscode.diff',
                                leftUri,
                                rightUri,
                                `${path.basename(currentPath)} (${pick})`
                            )
                        });
                    });
            },
            err => {
                console.log(err);
            }
        );
    }
}

module.exports = SyncManager;