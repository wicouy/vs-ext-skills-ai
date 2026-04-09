import { Skill, Category } from '../models';

export class SkillManager {
    private skills: Skill[] = [];
    private categories: Category[] = [];

    constructor() {
        // Here we will eventually load from VS Code globalStorage or workspaceStorage
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
