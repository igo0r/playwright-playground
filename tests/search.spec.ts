import { test, expect } from '@playwright/test';

test('Search for mouse click test #1', async ({ page }) => {
  await page.goto('/');
  await page.locator('[aria-label="Search"]').click();
  await page.locator('#docsearch-input').fill('click');
  await page.locator('.DocSearch-Hit-title').filter({hasText: 'Mouse'}).click();

  await expect(await page.locator('mouse-click')).toBeVisible();
});

test('Search for mouse click test #2', async ({ page }) => {
  await page.goto('/');
  await page.locator('[aria-label="Search"]').click();
  await page.locator('#docsearch-input').fill('click');
  await page.locator('.DocSearch-Hit-title').filter({hasText: 'Mouse'}).click();

  await expect(await page.locator('#mouse-click')).toBeVisible();
});
