import * as vscode from 'vscode';
import { SkillManager } from './manager';

export class SkillTreeProvider implements vscode.TreeDataProvider<SkillTreeItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<SkillTreeItem | undefined | void> = new vscode.EventEmitter<SkillTreeItem | undefined | void>();
    readonly onDidChangeTreeData: vscode.Event<SkillTreeItem | undefined | void> = this._onDidChangeTreeData.event;

    constructor(private skillManager: SkillManager) {}

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: SkillTreeItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: SkillTreeItem): Thenable<SkillTreeItem[]> {
        if (!element) {
            // Root elements (Categories)
            const categories = this.skillManager.getCategories();
            if (categories.length === 0) {
                return Promise.resolve([new SkillTreeItem('No categories found', vscode.TreeItemCollapsibleState.None)]);
            }
            return Promise.resolve(
                categories.map(cat => new SkillTreeItem(cat.label, vscode.TreeItemCollapsibleState.Collapsed, cat.id, 'category'))
            );
        } else if (element.type === 'category') {
            // Children (Skills)
            const skills = this.skillManager.getSkillsByCategory(element.id!);
            return Promise.resolve(
                skills.map(skill => new SkillTreeItem(skill.label, vscode.TreeItemCollapsibleState.None, skill.id, 'skill'))
            );
        }

        return Promise.resolve([]);
    }
}

export class SkillTreeItem extends vscode.TreeItem {
    constructor(
        public readonly label: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        public readonly id?: string,
        public readonly type?: 'category' | 'skill'
    ) {
        super(label, collapsibleState);
        this.tooltip = this.label;
        if (this.type === 'category') {
            this.iconPath = new vscode.ThemeIcon('folder');
        } else if (this.type === 'skill') {
            this.iconPath = new vscode.ThemeIcon('zap');
        }
    }
}
