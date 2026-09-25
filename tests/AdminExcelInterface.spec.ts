import { test } from "../fixture/BaseFixture.js";
import { createExcel } from "../test-data/ExcelInterfaceData.js";
import { TestData } from "../test-data/TestData.js";
import { readExcelInt } from "../utils/ExcelInterfaceReader.js";



await createExcel();

const testData1 = await readExcelInt();
console.log("Records Found :", testData1.length);

test(`Login Test write excel file `, async ({ page, loginpage, homepage, adminpage}) => {

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
