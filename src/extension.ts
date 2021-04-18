import * as vscode from 'vscode';
import { postIdea, postSelectedThought, postThought } from './commands';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('flomo.postIdea', postIdea),
    vscode.commands.registerCommand('flomo.postThought', postThought),
    vscode.commands.registerCommand('flomo.postSelectedThought', postSelectedThought)
  );
}

export function deactivate() {}
