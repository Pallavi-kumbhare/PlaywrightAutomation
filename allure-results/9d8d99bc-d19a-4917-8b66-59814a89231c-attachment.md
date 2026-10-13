# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTestJson.spec.ts >> Login using Json file
- Location: tests\LoginTestJson.spec.ts:5:1

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
  1  | import {test , expect} from "../fixture/BaseFixture.js"
  2  | import TestData1  from '../test-data/Testdata.json' with { type: 'json' };
  3  | import { LoginPage } from '../pages/LoginPage.js';
  4  | 
  5  | test('Login using Json file', async ({ page , loginpage }) => {
  6  | 
  7  |     
> 8  |    await page.goto(TestData1.url);
     |               ^ Error: page.goto: Test timeout of 30000ms exceeded.
  9  |     await loginpage.login1(TestData1.invalidLogin.username, TestData1.invalidLogin.password);
  10 |     await loginpage.login1(TestData1.validLogin.username, TestData1.validLogin.password);
  11 | 
  12 | });
  13 | 
```