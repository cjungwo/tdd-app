import { userFixtures } from '@__tests__/fixtures/user-fixture';
import { BaseHelper } from '@__tests__/playwright/base-helper';
import { test, expect } from '@playwright/test';

export const headerTest = (url: string) => {
    // aria-role에서는 link와 btn을 구분함
    test('if not sign-in, "login" link is visible', async ({ page }) => {
        await page.goto(url);
        await expect(
            page.getByTestId('header').getByRole('link', { name: 'Login'})
        ).toBeVisible();
    });

    test('if sign-in, "user-menu" btn is visible', async ({
        page,
        context,
    }) => {
        const helper = new BaseHelper(page, context);
        const user = userFixtures[0];

        await helper.signIn(user.nickname);
        await page.goto(url);
        await expect(
            page.getByTestId('header').getByRole('button', { name: 'user-menu'})
        ).toBeVisible();
    });
}