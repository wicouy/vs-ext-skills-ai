export interface Category {
    id: string;
    label: string;
    description?: string;
}

export interface ContextData {
    language?: string[];
    frameworks?: string[];
    [key: string]: any;
}

export interface Skill {
    id: string;
    label: string;
    categoryId: string;
    prompt: string;
    context?: ContextData;
}
