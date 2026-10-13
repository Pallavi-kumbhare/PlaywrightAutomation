import { test } from "../fixture/BaseFixture.js";
import { createExcel } from "../test-data/ExcelInterfaceData.js";
import { TestData } from "../test-data/TestData.js";
import { readExcelInt } from "../utils/ExcelInterfaceReader.js";


/* create excel file with test data */
await createExcel();

/* read excel file and get test data */
const testData1 = await readExcelInt();
console.log("Records Found :", testData1.length);


/*Test case 1- Login in account and search the user and update the username and logout from the application*/

test(`Login Test write excel file `,{ tag: ['@TC_CA_001', '@Smoke']},async ({ page , loginpage, adminpage }) => {

    await page.goto(TestData.url);

    for (const exceldata of testData1) {
    await loginpage.login1( exceldata.username, exceldata.password);

    if (await page.url() === 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') 
        {
            console.log("Login successful for TC_", exceldata.tc_id);
            await adminpage.adminbutton();
            await adminpage.searchUser(TestData.username);
            await adminpage.editUserName(TestData.updatedUsername);
 
             await loginpage.Logout();
            break;
        }
    else {
        console.log("Login failed for TC_", exceldata.tc_id);
        }

}
});



/* Test case 2- Login in an application and verify the title of the page after login */
test('Login in an application', { tag: ['@TC_CA_002', '@canvas']},async ({ page , loginpage, homepage }) => {

    await homepage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await loginpage.login1('Admin' , 'admin123');
    //await expect(page.getByText('Dashboard')).toBeVisible();    
});



/* Test case 3- Just a sample test case to check the tag functionality in playwright.config.ts file */
test('Login in an application test', { tag: ['@TC_CA_003', '@canvas']},async ({ page , loginpage, homepage }) => {

console.log("Test case 3");
});
