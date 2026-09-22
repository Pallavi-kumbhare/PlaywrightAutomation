import {test , expect} from "../fixture/BaseFixture.js"
import TestData1  from '../test-data/Testdata.json' with { type: 'json' };
import { LoginPage } from '../pages/LoginPage.js';

test('Login using Json file', async ({ page , loginpage }) => {

    
   await page.goto(TestData1.url);
    await loginpage.login1(TestData1.invalidLogin.username, TestData1.invalidLogin.password);
    await loginpage.login1(TestData1.validLogin.username, TestData1.validLogin.password);

});
