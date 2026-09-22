import ExcelJS from 'exceljs';

export async function readExcelInt() {

  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile('C:/Users/u463482/node-learning/test-data/WriteInExcel.xlsx');

  const worksheet = workbook.getWorksheet('TestdataSheet');

  if (!worksheet) {
    throw new Error('Worksheet not found');
  }

  const data: any[] = [];

  worksheet.eachRow((row, rowNumber) => {

    if (rowNumber === 1) {
      return;
    }

    data.push({
      tc_id: row.getCell(1).value,
      group: row.getCell(2).value,
      username: row.getCell(3).value,
      password: row.getCell(4).value
    });

  });

  return data;
}