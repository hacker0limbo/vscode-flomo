import * as vscode from 'vscode';
import axios from 'axios';
import { getPublicAPIKey } from './config';

type FlomoResponse = {
  code: 0 | -1;
  message: string;
  memo?: {
    creator_id: number;
    source: string;
    content: string;
    tags: string[];
    created_at: string;
    slug: string;
    parent_memo_slug: string | null;
  };
};

const postToFlomo = (content: string) => {
  const publicAPIKey = getPublicAPIKey();
  if (publicAPIKey) {
    axios
      .post<FlomoResponse | string>(publicAPIKey, {
        content,
      })
      .then((res) => {
        if (typeof res.data === 'string') {
          throw new Error();
        } else {
          const { code, message } = res.data as FlomoResponse;
          if (code === 0) {
            vscode.window.showInformationMessage(
              `${message}, 发布时间为: ${res.data.memo!.created_at}`
            );
          } else {
            // api is not fully correct or has no auth
            vscode.window.showWarningMessage(`发送失败, 失败原因: ${message}`);
          }
        }
      })
      .catch((err) => {
        // api is completely wrong
        vscode.window.showErrorMessage('发送失败, 请检查你的 API Key 是否正确');
      });
  } else {
    vscode.window.showWarningMessage('请先设置你的 API Key', 'Go to Settings').then((value) => {
      if (value === 'Go to Settings') {
        vscode.commands.executeCommand('workbench.action.openSettings', 'flomo');
      }
    });
  }
};

export const postIdea = () => {
  vscode.window
    .showInputBox({
      placeHolder: '输入你的想法',
    })
    .then((content) => {
      if (content) {
        postToFlomo(content);
      }
    });
};

export const postThought = () => {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const content = editor.document.getText();
    content && postToFlomo(content);
  }
};

export const postSelectedThought = () => {
  const editor = vscode.window.activeTextEditor;
  if (editor && editor.selections.length > 0) {
    editor.selections.forEach((selection) => {
      const content = editor.document.getText(selection);
      content && postToFlomo(content);
    });
  }
};
