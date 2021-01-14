import * as fs from 'fs'
import * as path from 'path';
import * as vscode from 'vscode'

const filenames = ['type', 'resolver', 'model', 'db', 'index']

export const createTypeFolder = (selectedUri: vscode.Uri, typeName: string) => {
  let fullPath = selectedUri + '/' + typeName;
  fullPath = fullPath.substring('file://'.length);
  const capitalized = typeName[0].toUpperCase() + typeName.toLowerCase().slice(1);
  if (fs.existsSync(fullPath))
    return vscode.window.showErrorMessage(
      'Type already exists. Please choose another name'
    );
  fs.mkdirSync(fullPath);
  filenames.forEach(filename => {
    fs.readFile(path.join(__dirname, `../src/templates/${filename}.ts`), 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
      const rendered = data.replace(/<%%>/g, capitalized)
      fs.writeFileSync(`${fullPath}/${filename}.ts`, rendered);
    })
  })
};
