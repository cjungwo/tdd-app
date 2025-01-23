import { test, expect } from '@playwright/test';

test('env', async ({ page, context }) => {
  console.log(process.env.NEXT_PUBLIC_WEB_BASE_URL);
  try {
    await page.goto('/');
  } catch (e) {
    console.error(e);
  }
});
