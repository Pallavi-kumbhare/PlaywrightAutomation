
import {test , expect} from "../fixture/BaseFixture.js"
import { TestData } from '../test-data/TestData.js';


test('Update username', async ({ page, loginpage, homepage,adminpage }) => {

    
    //LoginTest code

     await homepage.navigate(TestData.url);
     await loginpage.login1(TestData.username , TestData.password);
      
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle('OrangeHRM');
    console.log('true')
    await adminpage.adminbutton();
    
    await adminpage.searchUser(TestData.username);
     
    await adminpage.editUserName(TestData.updatedUsername);
 
    await loginpage.Logout();

});