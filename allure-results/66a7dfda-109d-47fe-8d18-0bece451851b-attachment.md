# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTestExcel.spec.ts >> Login Test using excel file - TC_TC_001}
- Location: tests\LoginTestExcel.spec.ts:14:1

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
  1  | 
  2  | import {test , expect} from "../fixture/BaseFixture.js"
  3  | import { TestData } from "../test-data/TestData.js";
  4  | import { readExcel } from '../utils/ExcelReader.js';
  5  | 
  6  |   const testData = await readExcel();
  7  | 
  8  |   for (const data of testData) {
  9  | console.log(`Test case id=${data.tcid}`);
  10 | console.log(data.username);
  11 | console.log(data.password);
  12 | console.log(data.browser);
  13 |   
  14 | test(`Login Test using excel file - TC_${data.tcid}}`, async ({ page, loginpage, homepage, adminpage}) => {
  15 |    
  16 | 
> 17 | await page.goto(TestData.url);
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  18 | await loginpage.login1( data.username, data.password);
  19 | await expect(page).toHaveTitle('OrangeHRM');
  20 | console.log('true');
  21 | });
  22 | 
  23 | }
```