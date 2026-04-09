import { Skill, Category } from '@/models';
import { t } from '@/i18n';

export class SkillManager {
    private skills: Skill[] = [];
    private categories: Category[] = [];

    constructor() {
        // Mock data para Fase 1
        this.categories = [
            { id: 'cat-refactoring', label: t('mock.refactoring'), description: t('mock.refactoringDesc') },
            { id: 'cat-testing', label: t('mock.testing'), description: t('mock.testingDesc') }
        ];

        this.skills = [
            { id: 'skill-refact-1', label: t('mock.cleanCode'), categoryId: 'cat-refactoring', prompt: t('mock.cleanCodePrompt') },
            { id: 'skill-test-1', label: t('mock.jestTests'), categoryId: 'cat-testing', prompt: t('mock.jestTestsPrompt') }
        ];
    }

    public getCategories(): Category[] {
        return this.categories;
    }

    public getSkillsByCategory(categoryId: string): Skill[] {
        return this.skills.filter(skill => skill.categoryId === categoryId);
    }

    public addSkill(skill: Skill): void {
        this.skills.push(skill);
    }

    public deleteSkill(id: string): void {
        this.skills = this.skills.filter(s => s.id !== id);
    }
}
