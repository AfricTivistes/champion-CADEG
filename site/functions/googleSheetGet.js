require("dotenv").config();
const {GoogleSpreadsheet} = require("google-spreadsheet");

const {GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET} = process.env;

const getvalue = async() => {

  const doc = new GoogleSpreadsheet(GOOGLE_SHEET);
  await doc.useServiceAccountAuth({
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: JSON.parse(GOOGLE_PRIVATE_KEY),
  });

  await doc.loadInfo(); // loads document properties and worksheets

  const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  await sheet.loadCells('C2:C11');
  const candidants = [];
  for (let i = 1; i < 11; i++) {
    candidants.push(sheet.getCell(i, 2).value);
  }

  return new Promise((resolve) => {
    resolve([
      {"id": "c1", "count": candidants[0]},
      {"id": "c2", "count": candidants[1]},
      {"id": "c3", "count": candidants[2]},
      {"id": "c4", "count": candidants[3]},
      {"id": "c5", "count": candidants[4]},
      {"id": "c6", "count": candidants[5]},
      {"id": "c7", "count": candidants[6]},
      {"id": "c8", "count": candidants[7]},
      {"id": "c9", "count": candidants[8]},
      {"id": "c10", "count": candidants[9]},
      {"id": "c11", "count": candidants[10]}
    ]);
  });
};

module.exports = getvalue;
