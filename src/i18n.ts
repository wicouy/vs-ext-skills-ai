import * as vscode from 'vscode';
import i18next from 'i18next';
import en from '@/locales/en.json';
import es from '@/locales/es.json';

export async function initI18n() {
    // Detect VS Code language
    const language = vscode.env.language || 'en';
    
    await i18next.init({
        lng: language,
        fallbackLng: 'en',
        resources: {
            en: { translation: en },
            es: { translation: es }
        },
        interpolation: {
            escapeValue: false // No es necesario para logs/mensajes de VS Code
        }
    });

    return i18next;
}

export const t = i18next.t.bind(i18next);
