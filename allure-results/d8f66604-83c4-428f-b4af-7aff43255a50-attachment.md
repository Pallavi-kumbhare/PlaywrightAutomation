# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTestInterface.spec.ts >> Login using interface folder
- Location: tests\LoginTestInterface.spec.ts:6:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import {test , expect} from '@playwright/test';
  2  | import type { LoginData } from '../interfaces/Logindata.interfaces.js';
  3  | import TestData  from '../test-data/Testdata.json' with { type: 'json' };
  4  | import { LoginPage } from '../pages/LoginPage.js';
  5  | 
  6  | test('Login using interface folder', async ({ page }) => {
  7  | 
  8  | const logindata : LoginData = TestData;
  9  | 
  10 | //console.log(JSON.stringify(logindata, null, 2));
  11 | 
  12 | 
> 13 | await page.goto(logindata.url);
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  14 | const loginPage = new LoginPage(page);
  15 | await loginPage.login1(logindata.invalidLogin.username, logindata.invalidLogin.password);
  16 | console.log(TestData.invalidLogin.expectedMessage);
  17 | await loginPage.login1(logindata.validLogin.username, logindata.validLogin.password);
  18 | await expect(page).toHaveTitle('OrangeHRM');
  19 | console.log('true')
  20 | });
```