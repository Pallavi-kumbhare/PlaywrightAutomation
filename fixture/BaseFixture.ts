import { test as base } from '@playwright/test';
import { AdminPage } from "../pages/AdminPage.js";
import { HomePage } from "../pages/HomePage.js";
import { LoginPage } from "../pages/LoginPage.js"

type MyFixture ={
    loginpage : LoginPage;
    homepage : HomePage;
    adminpage : AdminPage;
}

export const test = base.extend<MyFixture>({
    loginpage : async ({ page }, use) =>{
        await use(new LoginPage(page));
    },

    homepage : async ({ page }, use) =>{
        await use(new HomePage(page));
    },

    adminpage : async ({ page }, use) =>{
        await use(new AdminPage(page));
    }
});

export { expect } from '@playwright/test';