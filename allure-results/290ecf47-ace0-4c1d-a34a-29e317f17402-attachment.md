# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AdminExcelInterface.spec.ts >> Login Test write excel file 
- Location: tests\AdminExcelInterface.spec.ts:17:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[name="username"]')
    - locator resolved to <input autofocus="" name="username" data-v-1f99f73c="" placeholder="Username" class="oxd-input oxd-input--active"/>
    - fill("UsNam")
  - attempting fill action
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    - waiting for element to be visible, enabled and editable
  - element was detached from the DOM, retrying

```

# Test source

```ts
  1  | import { type Page, type Locator, expect } from '@playwright/test';
  2  | import { HomePage } from './HomePage.js';
  3  | 
  4  | 
  5  | 
  6  | export class LoginPage extends HomePage{
  7  | 
  8  |     private readonly username: Locator;
  9  |     readonly password: Locator;
  10 |     readonly loginButton: Locator;
  11 |     readonly username3: Locator;
  12 |     readonly logout : Locator;
  13 | 
  14 |     constructor(page: Page) {
  15 |         super(page);
  16 | 
  17 |         this.username = page.locator('[name="username"]');
  18 |         this.password = page.locator('[name="password"]');
  19 |         this.loginButton = page.locator('[type="submit"]');
  20 |         this.username3 = page.locator('p[class="oxd-userdropdown-name"]');
  21 |         this.logout = page.getByText("Logout");
  22 | 
  23 |     }
  24 | 
  25 |     async login1(userName: string, passWord: string): Promise<void> {
> 26 |         await this.username.fill(userName);
     |                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  27 |          await this.password.fill(passWord);
  28 |         await this.loginButton.click();
  29 | 
  30 |         //  await expect(this.page).toHaveTitle('OrangeHRM');
  31 |         //   console.log('true');
  32 |     }
  33 | 
  34 |     
  35 | 
  36 |     async Logout(): Promise<void> {
  37 |         await this.username3.click();
  38 |         await this.logout.click();
  39 |         
  40 |     }
  41 | }
  42 | 
  43 | 
  44 | 
```