import type { Page, Locator } from '@playwright/test';

export class HomePage {

    constructor (protected page: Page){ }
    async navigate(url : string) {
        await this.page.goto(url)}

    }
