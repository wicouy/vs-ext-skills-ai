import * as vscode from 'vscode';
import { SkillManager } from './skills/manager';
import { SkillTreeProvider } from './skills/provider';
import { ChatBridge } from './ui/chatBridge';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "ai-skill-library" is now active!');

    const skillManager = new SkillManager();
    const skillTreeProvider = new SkillTreeProvider(skillManager);

    vscode.window.registerTreeDataProvider('aiSkillLibraryView', skillTreeProvider);

    const chatBridge = new ChatBridge(skillManager);
    chatBridge.registerParticipant(context);

    // Register refresh command
    let disposableRefresh = vscode.commands.registerCommand('aiSkillLibrary.refresh', () => {
        skillTreeProvider.refresh();
    });

    let disposableAddSkill = vscode.commands.registerCommand('aiSkillLibrary.addSkill', () => {
        vscode.window.showInformationMessage('Add Skill command triggered.');
        // Implementation for adding a skill goes here
    });

    context.subscriptions.push(disposableRefresh, disposableAddSkill);
}

export function deactivate() {}
