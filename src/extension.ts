import * as vscode from 'vscode';
import { SkillManager } from '@/skills/manager';
import { SkillTreeProvider } from '@/skills/provider';
import { ChatBridge } from '@/ui/chatBridge';
import { initI18n, t } from '@/i18n';

export async function activate(context: vscode.ExtensionContext) {
    await initI18n();

    const outputChannel = vscode.window.createOutputChannel('AI Skill Library');
    outputChannel.appendLine('Extension activated.');

    const skillManager = new SkillManager();
    const skillTreeProvider = new SkillTreeProvider(skillManager);

    vscode.window.registerTreeDataProvider('aiSkillLibraryView', skillTreeProvider);

    const chatBridge = new ChatBridge(skillManager);
    chatBridge.registerParticipant(context);

    const disposableRefresh = vscode.commands.registerCommand('aiSkillLibrary.refresh', () => {
        skillTreeProvider.refresh();
    });

    const disposableAddSkill = vscode.commands.registerCommand('aiSkillLibrary.addSkill', () => {
        vscode.window.showInformationMessage(t('common.comingSoon', { action: t('common.addSkill') }));
    });

    const disposableEditSkill = vscode.commands.registerCommand('aiSkillLibrary.editSkill', () => {
        vscode.window.showInformationMessage(t('common.comingSoon', { action: t('common.editSkill') }));
    });

    const disposableDeleteSkill = vscode.commands.registerCommand('aiSkillLibrary.deleteSkill', () => {
        vscode.window.showInformationMessage(t('common.comingSoon', { action: t('common.deleteSkill') }));
    });

    context.subscriptions.push(
        outputChannel,
        disposableRefresh,
        disposableAddSkill,
        disposableEditSkill,
        disposableDeleteSkill
    );
}

export function deactivate() {}
