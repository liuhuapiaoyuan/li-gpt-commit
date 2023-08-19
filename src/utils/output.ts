import * as vscode from "vscode";

const outputChannel = vscode.window.createOutputChannel("GPT Commit@Li");

export function logToOutputChannel(message: string) {
  outputChannel.appendLine(`GPT Commit@Li: ${message}`);
}
