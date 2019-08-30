const vscode = require('vscode');
const path = require('path');

module.exports = {
    ROOT_DIR: vscode.workspace.rootPath,
    OUT_DIR: path.join(vscode.workspace.rootPath, 'ServiceNow'),
    CONFIG_PATH: path.join(vscode.workspace.rootPath, 'iglooconfig.txt'),
    REGISTER_PATH: path.join(vscode.workspace.rootPath, 'ServiceNow', 'register.json'),
    SNOW_API_PATH: 'api/now/'
};
