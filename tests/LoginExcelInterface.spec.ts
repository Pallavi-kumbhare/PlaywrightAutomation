import { test, expect } from "../fixture/BaseFixture.js";
import { TestData } from "../test-data/TestData.js";
import { readExcelInt } from "../utils/ExcelInterfaceReader.js";
import { createExcel } from "../test-data/ExcelInterfaceData.js"

await createExcel();

const testData1 = await readExcelInt();
console.log("true 1");
console.log("Records Found :", testData1.length);

 for (const dataex of testData1) {
  console.log("true 2");
console.log(`a=${dataex.tc_id}`);
console.log(dataex.username);
console.log(dataex.password);
console.log(dataex.group);

test(`Login Test write excel file - TC_${dataex.tc_id} @Smoke`, async ({ page, loginpage, homepage, adminpage}) => {

  await page.goto(TestData.url);
  await loginpage.login1( dataex.username, dataex.password);
  await expect(page).toHaveTitle('OrangeHRM');
  console.log('true');
});

}