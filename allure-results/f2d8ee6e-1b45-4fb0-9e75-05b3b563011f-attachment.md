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
  - waiting for locator('//input[@class="oxd-input oxd-input--active" and not(@placeholder="Search")]')

```

# Test source

```ts
  1  | import type { Page, Locator } from "@playwright/test";
  2  | 
  3  | import { LoginPage } from "./LoginPage.js";
  4  | 
  5  | 
  6  | 
  7  | export class AdminPage extends LoginPage {
  8  |     readonly AdminLink: Locator;
  9  |     readonly userTextbox : Locator;
  10 |     readonly searchButton : Locator;
  11 |     readonly editButton : Locator;
  12 |     readonly userTextbox2 : Locator;
  13 |     readonly saveButton : Locator;
  14 | 
  15 | constructor(page: Page) {
  16 |         super(page);
  17 |        
  18 |         this.AdminLink= page.getByRole('link', { name: 'Admin' });
  19 |         this.userTextbox = page.locator('//input[@class="oxd-input oxd-input--active" and not(@placeholder="Search")]');
  20 |         this.searchButton = page.getByRole('button', { name: 'Search' });
  21 |         this.editButton = page.locator("i[class='oxd-icon bi-pencil-fill']");
  22 |         this.userTextbox2 = page.locator('xpath=//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input');
  23 |         this.saveButton = page.locator('button[type= "submit"]');
  24 | }
  25 | async adminbutton(): Promise<void> {
  26 |        
  27 |         await this.AdminLink.click();
  28 |     }
  29 | 
  30 | async searchUser(userName: string): Promise<void> {
  31 | 
> 32 |     await this.userTextbox.fill(userName);
     |                            ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  33 |     await this.searchButton.click();
  34 | 
  35 | }
  36 | 
  37 | async editUserName(username2: string): Promise<void> {
  38 |     await this.editButton.first().click();
  39 |     await this.userTextbox2.fill(username2);
  40 |     await this.saveButton.click();
  41 | 
  42 | 
  43 | }
  44 | 
  45 | 
  46 | }
  47 | 
```