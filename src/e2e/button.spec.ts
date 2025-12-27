import { test, expect } from "@chromatic-com/playwright";

test('button works in real browser', async ({ page }) => {
  await page.goto('http://localhost:6006')
  const canvas = page.frameLocator('#storybook-preview-iframe');

  await expect(
    canvas.getByRole('button', { name: 'Text' })
  ).toBeVisible();
})
