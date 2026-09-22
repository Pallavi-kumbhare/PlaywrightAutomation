
import {test , expect} from "../fixture/BaseFixture.js"
import { TestData } from "../test-data/TestData.js";
import { readExcel } from '../utils/ExcelReader.js';

  const testData = await readExcel();

  for (const data of testData) {
console.log(`Test case id=${data.tcid}`);
console.log(data.username);
console.log(data.password);
console.log(data.browser);
  
test(`Login Test using excel file - TC_${data.tcid}`, async ({ page, loginpage, homepage, adminpage}) => {
   

await page.goto(TestData.url);
await loginpage.login1( data.username, data.password);
await expect(page).toHaveTitle('OrangeHRM');
console.log('true');
});

}