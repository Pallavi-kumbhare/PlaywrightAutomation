import ExcelJS from 'exceljs';

export async function readExcel() {

  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile('./test-data/Excel_data2.xlsx');

  const worksheet = workbook.getWorksheet('Sheet1');

  if (!worksheet) {
    throw new Error('Worksheet not found');
  }

  const data: any[] = [];

  worksheet.eachRow((row, rowNumber) => {

    if (rowNumber === 1) {
      return;
    }

    data.push({
      tcid: row.getCell(1).value,
      browser: row.getCell(2).value,
      username: row.getCell(3).value,
      password: row.getCell(4).value
    });

  });

  return data;
}