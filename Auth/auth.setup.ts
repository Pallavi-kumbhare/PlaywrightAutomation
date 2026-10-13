import { test as setup } from '@playwright/test';
import { TestData } from '../test-data/TestData.js';

setup('authenticate', async ({ page }) => {

    await page.goto(TestData.url);

    await page.locator('[name="username"]').fill(TestData.username);
    await page.locator('[name="password"]').fill(TestData.password);

    await page.locator('button[type="submit"]').click();

    await page.waitForURL('**/dashboard/**');

    await page.context().storageState({
        path: 'auth/user.json'
    });

});