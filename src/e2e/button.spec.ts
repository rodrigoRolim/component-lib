import { test, expect } from 'playwright/test';

test('button works in real browser', async ({ page }) => {
  await page.goto('http://localhost:6006')
  await expect(page.getByText('Text')).toBeVisible()
})
