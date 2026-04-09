import 'module-alias/register';
import * as assert from 'assert';
import * as vscode from 'vscode';
import { SkillManager } from '@/skills/manager';
import { initI18n, t } from '@/i18n';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('SkillManager should be initialized with mock data', () => {
		const manager = new SkillManager();
		const categories = manager.getCategories();
		assert.strictEqual(categories.length > 0, true);
	});

	test('i18n should return translation for common.noCategories', async () => {
		await initI18n();
		const label = t('common.noCategories');
		assert.ok(label);
	});
});
