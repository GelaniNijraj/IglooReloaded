import vscode from 'vscode';
import path from 'path';

export default {
    ROOT_DIR: vscode.workspace.rootPath,
    OUT_DIR: path.join(vscode.workspace.rootPath, 'ServiceNow'),
    CONFIG_PATH: path.join(vscode.workspace.rootPath, 'iglooconfig.txt'),
    REGISTER_PATH: path.join(vscode.workspace.rootPath, 'ServiceNow', 'register.json'),
    SNOW_API_PATH: 'api/now/',
    LOCAL_MAPPINGS_PATH: path.join(vscode.workspace.rootPath, 'mappings.json'),
    JSON_CONFIG_PATH: path.join(vscode.workspace.rootPath, 'jsconfig.json'),
    TYPE_DIR_PATH: path.join(vscode.workspace.rootPath, '@types'),
};
