import type { Page, Locator } from '@playwright/test';
import { HomePage } from './HomePage.js';



export class LoginPage extends HomePage{

    private readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly username3: Locator;
    readonly logout : Locator;

    constructor(page: Page) {
        super(page);

        this.username = page.locator('[name="username"]');
        this.password = page.locator('[name="password"]');
        this.loginButton = page.locator('[type="submit"]');
        this.username3 = page.locator('p[class="oxd-userdropdown-name"]');
        this.logout = page.getByText("Logout");

    }

    async login1(userName: string, passWord: string): Promise<void> {
        await this.username.fill(userName);
         await this.password.fill(passWord);
        await this.loginButton.click();
    }

    async Logout(): Promise<void> {
        await this.username3.click();
        await this.logout.click();
        
    }
}


