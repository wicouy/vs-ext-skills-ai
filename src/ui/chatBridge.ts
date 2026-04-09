import * as vscode from 'vscode';
import { SkillManager } from '@/skills/manager';

export class ChatBridge {
    constructor(private skillManager: SkillManager) {}

    public registerParticipant(context: vscode.ExtensionContext) {
        // Later we will integrate with vscode.chat API
        // For example: vscode.chat.createChatParticipant(...)
    }

    public injectSkillIntoContext(skillId: string) {
        // Logic to format prompt template and pass to current chat interface
    }
}
