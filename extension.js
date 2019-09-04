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
	const syncManager = new SyncManager(register);
	syncManager.initialize(path.join(context.asAbsolutePath('./data'), 'type_definitions'));

	const importAll = vscode.commands.registerCommand('iglooreloaded.importAll', () => {
		let mappings = null;
		try {
			if (fs.existsSync(CONSTANTS.LOCAL_MAPPINGS_PATH))
				mappings = JSON.parse(fs.readFileSync(CONSTANTS.LOCAL_MAPPINGS_PATH).toString());
			else
				mappings = JSON.parse(fs.readFileSync(path.join(context.asAbsolutePath('./data'), 'mappings.json')).toString());
			if (mappings)
				syncManager.importAll(mappings);
		} catch(ex) {
			console.error(ex);
			vscode.window.showErrorMessage('Could not parse the mappings.json file. Either fix it or remove it to use the default mappings.');
		}
	});

	const exportMappings = vscode.commands.registerCommand('iglooreloaded.exportMappings', () => {
		let writeStream = fs.createWriteStream(CONSTANTS.LOCAL_MAPPINGS_PATH);
		writeStream.write(fs.readFileSync(path.join(context.asAbsolutePath('./data'), 'mappings.json')).toString());
		writeStream.end();
		vscode.window.showInformationMessage('Mappings exported to the mappings.json file successfully.');
	});

	const importSingle = vscode.commands.registerCommand('iglooreloaded.importSingle', () => {
		syncManager.importSingle(vscode.window.activeTextEditor.document.fileName);
	});

	const exportSingle = vscode.commands.registerCommand('iglooreloaded.exportSingle', () => {
		syncManager.exportSingle(vscode.window.activeTextEditor.document.fileName);
	});

	const showDiff = vscode.commands.registerCommand('iglooreloaded.showDifference', () => {
		syncManager.showDiff(vscode.window.activeTextEditor.document.fileName);
	});

	const openOnServiceNow = vscode.commands.registerCommand('iglooreloaded.openOnServiceNow', (item) => {
		let registerEntry = register.get(item.fsPath);
		if (!registerEntry) {
			vscode.window.showErrorMessage('Not a ServiceNow file.');
		} else {
			vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(`${CONFIG.url}/${registerEntry.table}.do?sys_id=${registerEntry.sys_id}`));
		}
	});

	context.subscriptions.push(importAll, importSingle, exportSingle, showDiff, openOnServiceNow, exportMappings);
	vscode.workspace.onDidSaveTextDocument((document) => {
		if (path.basename(document.fileName) == 'iglooconfig.txt') {
			try{
				register.configurationUpdateHandler(JSON.parse(document.getText()).track_changes);
				syncManager.configurationUpdateHandler(JSON.parse(document.getText()));
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
