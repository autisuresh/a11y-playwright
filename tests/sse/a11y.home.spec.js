import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('homepage a11y', () => {

    test('has header on home page', async ({ page }) => {
        await page.goto('https://www.sse.com/');
        await expect(page).toHaveTitle(/We power change | SSE/);
    });
    
    test('homepage axe', async ({page}) => {
        await page.goto('https://www.sse.com/');
        const a11y_results = await new AxeBuilder({page}).analyze();
        expect(a11y_results.violations).toEqual([]);
    });
});

