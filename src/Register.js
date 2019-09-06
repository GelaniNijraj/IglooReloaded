const fs = require('fs');
const path = require('path');
// const crypto = require('crypto');
import crypto from 'crypto';
const simpleGit = require('simple-git');
const rimraf = require('rimraf');

const CONSTANTS = require('./Constants');

/**
 * TODO: Make it singleton.
 */
class Register {
    /**
     * Initializes a new register object.
     * 
     * @param {string} path Path to the register.json
     */
    constructor(registerPath, trackChanges = false) {
        this.path = registerPath;
        this.trackChanges = trackChanges;
        this.configurationUpdateHandler(trackChanges);
        try {
            var registerContent = "{ }";
            if (fs.existsSync(this.path)) {
                registerContent = fs.readFileSync(this.path).toString();
            }
            this.register = JSON.parse(registerContent);
            this._updateRegister();
        } catch (ex) {
            this.register = {};
            console.error(ex);
        }
    }

    configurationUpdateHandler(trackChanges) {
        if (trackChanges == true) {
            this._initializeGitRepo();
        } else {
            this._cleanupGitRepo();
        }
    }

    _initializeGitRepo() {
        this.simpleGit = simpleGit(CONSTANTS.ROOT_DIR);
        if (!fs.existsSync(path.join(CONSTANTS.ROOT_DIR, '.git'))) {
            this.simpleGit.init(false, () => {
                console.log('Git repo initialized.');
                fs.writeFileSync(path.join(CONSTANTS.ROOT_DIR, '.gitignore'), 'iglooconfig.txt\nregister.json\n.gitignore');
                this.simpleGit.add('.').commit('Initial commit');
            });
        }
    }

    _cleanupGitRepo() {
        this.simpleGit = null;
        if (fs.existsSync(path.join(CONSTANTS.ROOT_DIR, '.gitignore')))
            fs.unlinkSync(path.join(CONSTANTS.ROOT_DIR, '.gitignore'));
        if (fs.existsSync(path.join(CONSTANTS.ROOT_DIR, '.git')))
            rimraf(path.join(CONSTANTS.ROOT_DIR, '.git'), (err) => {
                if (err)
                    console.error(err);
            });
    }

    _genHashFromPath(path) {
        return crypto.createHash('md5').update(path.substr(CONSTANTS.ROOT_DIR.length)).digest('hex');
    }

    _updateRegister() {
        if (!fs.existsSync(CONSTANTS.OUT_DIR))
            fs.mkdirSync(CONSTANTS.OUT_DIR);
        let writeStream = fs.createWriteStream(this.path);
        writeStream.write(JSON.stringify(this.register));
        writeStream.end();
    }

    commitFile(filePath) {
        if (this.simpleGit == null)
            return;
        this.simpleGit.add(filePath);
        this.simpleGit.commit('File synced with ServiceNow', filePath);
    }

    get(filePath) {
        const hash = this._genHashFromPath(filePath);
        return this.register[hash];
    }

    put(filePath, row) {
        var registerEntry = this.get(filePath);
        let writeStream = fs.createWriteStream(filePath);
        writeStream.write(row[registerEntry.column]);
        writeStream.end();

        registerEntry.sys_updated_on = row.sys_updated_on;
        this._updateRegister();
    }

    putEntry(filePath, entry) {
        const hash = this._genHashFromPath(filePath);
        this.register[hash] = entry;
        this._updateRegister();
    }

    add(filePath, row, mapEntry) {
        console.log('Writing', filePath);
        let parsedPath = path.parse(filePath);
        if (fs.existsSync(filePath)) {
            var i = 1, newPath;
            do {
                newPath = path.join(parsedPath.dir, `${parsedPath.name} (${i})${parsedPath.ext}`);
                if (!fs.existsSync(newPath))
                    break;
                i++;
            } while(true);
            filePath = newPath;
        }
        // write the file
        let writeStream = fs.createWriteStream(filePath);
        writeStream.write(row[mapEntry.content]);
        writeStream.end();
        // update the register
        const hash = this._genHashFromPath(filePath);
        this.register[hash] = {
            sys_id: row.sys_id,
            table: mapEntry.table,
            column: mapEntry.content,
            sys_updated_on: row.sys_updated_on
        };
        this._updateRegister();
    }
}

export default Register;
