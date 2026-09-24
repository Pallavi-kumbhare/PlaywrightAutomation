 import ExcelJS from 'exceljs';

export async function createExcel() { try {
  const workbook = new ExcelJS.Workbook();

  const worksheet = workbook.addWorksheet('TestdataSheet');

  worksheet.columns = [
    { header: 'TCID', key: 'tc_id', width: 15 },
    { header: 'Group', key: 'group', width: 15 },
    { header: 'Username', key: 'username', width: 20 },
    { header: 'Password', key: 'password', width: 20 }
  ];

  worksheet.addRow({
    tc_id: 'TC_001',
    group: 'Smoke',
    username: 'Admin88',
    password: 'admin123'
  });

  worksheet.addRow({
    tc_id: 'TC_002',
    group: 'Sanity',
    username: 'Admin11',
    password: 'admin1'
  });

  worksheet.addRow({
    tc_id: 'TC_003',
    group: 'Sanity',
    username: 'UsNam',
    password: 'PWD'
  });
  worksheet.addRow({
    tc_id: 'TC_004',
    group: 'Smoke',
    username: 'Admin',
    password: 'admin123'
  });

  await workbook.xlsx.writeFile("C:/Users/u463482/node-learning/test-data/WriteInExcel.xlsx");

  console.log('Excel file created');
 } 
 catch (error) {

console.error('Error creating file:', error);

}
}

createExcel();