const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

const CONSTANTS = require('./src/Constants');
const Register = require('./src/Register');
const SyncManager = require('./src/SyncManager');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	vscode.window.setStatusBarMessage('IglooReloaded: Loading...');

	const CONFIG = JSON.parse(fs.readFileSync(CONSTANTS.CONFIG_PATH).toString());
	// actions
	const register = new Register(CONSTANTS.REGISTER_PATH, CONFIG.track_changes);
	const mappingsFilePath = path.join(context.asAbsolutePath('./data'), 'mappings.json');
	const syncManager = new SyncManager(mappingsFilePath, register);

	const importAll = vscode.commands.registerCommand('extension.importAll', () => {
		syncManager.importAll();
	});

	const importSingle = vscode.commands.registerCommand('extension.importSingle', () => {
		syncManager.importSingle(vscode.window.activeTextEditor.document.fileName);
	});

	const exportSingle = vscode.commands.registerCommand('extension.exportSingle', () => {
		syncManager.exportSingle(vscode.window.activeTextEditor.document.fileName);
	});

	const showDiff = vscode.commands.registerCommand('extension.showDifference', () => {
		syncManager.showDiff(vscode.window.activeTextEditor.document.fileName);
	});

	context.subscriptions.push(importAll, importSingle, exportSingle, showDiff);
	vscode.workspace.onDidSaveTextDocument((document) => {
		if (path.basename(document.fileName) == 'iglooconfig.txt') {
			try{
				register.configurationUpdateHandler(JSON.parse(document.getText()).track_changes);
			} catch(e) {
				console.error(e);
				vscode.window.showErrorMessage('Could not parse the iglooconfig.txt file.');
			}
		}
	});
	vscode.window.setStatusBarMessage('IglooReloaded: Ready')
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
