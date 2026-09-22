

//import type { Page , Locator } from '@playwright/test';
import {test , expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/HomePage.js';


test('Login in an application', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await homePage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await loginPage.login1('Admin' , 'admin123');
    //await expect(page.getByText('Dashboard')).toBeVisible();    
});





