import * as vscode from 'vscode';

export const getPublicAPIKey = () => {
  const key = vscode.workspace.getConfiguration('flomo').get<string>('publicApiKey');
  return key;
};
