import {test , expect} from '@playwright/test';
import type { LoginData } from '../interfaces/Logindata.interfaces.js';
import TestData  from '../test-data/Testdata.json' with { type: 'json' };
import { LoginPage } from '../pages/LoginPage.js';

test('Login using interface folder', async ({ page }) => {

const logindata : LoginData = TestData;

//console.log(JSON.stringify(logindata, null, 2));


await page.goto(logindata.url);
const loginPage = new LoginPage(page);
await loginPage.login1(logindata.invalidLogin.username, logindata.invalidLogin.password);
console.log(TestData.invalidLogin.expectedMessage);
await loginPage.login1(logindata.validLogin.username, logindata.validLogin.password);
await expect(page).toHaveTitle('OrangeHRM');
console.log('true')
});