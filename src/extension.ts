import * as vscode from 'vscode';
import { SkillManager } from '@/skills/manager';
import { SkillTreeProvider } from '@/skills/provider';
import { ChatBridge } from '@/ui/chatBridge';
import { initI18n, t } from '@/i18n';

export async function activate(context: vscode.ExtensionContext) {
    await initI18n();
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
        vscode.window.showInformationMessage(t('common.comingSoon', { action: t('common.addSkill') }));
    });

    let disposableEditSkill = vscode.commands.registerCommand('aiSkillLibrary.editSkill', () => {
        vscode.window.showInformationMessage(t('common.comingSoon', { action: t('common.editSkill') }));
    });

    let disposableDeleteSkill = vscode.commands.registerCommand('aiSkillLibrary.deleteSkill', () => {
        vscode.window.showInformationMessage(t('common.comingSoon', { action: t('common.deleteSkill') }));
    });

    context.subscriptions.push(
        disposableRefresh, 
        disposableAddSkill, 
        disposableEditSkill, 
        disposableDeleteSkill
    );
}

export function deactivate() {}
