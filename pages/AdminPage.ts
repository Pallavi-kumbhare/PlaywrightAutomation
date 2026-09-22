import type { Page, Locator } from "@playwright/test";

import { LoginPage } from "./LoginPage.js";



export class AdminPage extends LoginPage {
    readonly AdminLink: Locator;
    readonly userTextbox : Locator;
    readonly searchButton : Locator;
    readonly editButton : Locator;
    readonly userTextbox2 : Locator;
    readonly saveButton : Locator;

constructor(page: Page) {
        super(page);
       
        this.AdminLink= page.getByRole('link', { name: 'Admin' });
        this.userTextbox = page.locator('//input[@class="oxd-input oxd-input--active" and not(@placeholder="Search")]');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.editButton = page.locator("i[class='oxd-icon bi-pencil-fill']");
        this.userTextbox2 = page.locator('xpath=//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input');
        this.saveButton = page.locator('button[type= "submit"]');
}
async adminbutton(): Promise<void> {
       
        await this.AdminLink.click();
    }

async searchUser(userName: string): Promise<void> {

    await this.userTextbox.fill(userName);
    await this.searchButton.click();

}

async editUserName(username2: string): Promise<void> {
    await this.editButton.first().click();
    await this.userTextbox2.fill(username2);
    await this.saveButton.click();


}

}
