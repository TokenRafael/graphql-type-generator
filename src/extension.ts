import * as vscode from 'vscode';
import { createTypeFolder } from "./handler";

export function activate(context: vscode.ExtensionContext) {
  console.log('graphql-folder-generator is active!');

  const createType = vscode.commands.registerCommand(
    'graphql-folder-generator.createType',
    async (file: vscode.Uri) => {
      const workspaceFolder = vscode.workspace.workspaceFolders
        ? vscode.workspace.workspaceFolders[0]
        : null;
      if (workspaceFolder === null)
        return vscode.window.showErrorMessage('No folder is open');
      const selectedUri = file || workspaceFolder;
      let typeName = await vscode.window.showInputBox({
        prompt: "What's the name of the type you're creating?",
        placeHolder: 'Ex: User',
      });
      if (!typeName)
        return vscode.window.showErrorMessage('No type name was given. Abort.');
      
      createTypeFolder(selectedUri, typeName);
      vscode.window.showInformationMessage(`${typeName} type created`);
    }
  );

  context.subscriptions.push(createType);
}

export function deactivate() {}
