import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';

// Parse local .env
dotenv.config();

const SPREADSHEET_URI = process.env.SPREADSHEET_URI;
const OUTPUT_PATH = path.join(__dirname, './data/spreadsheet.json');

const fetchSpreadsheetData = async () => {
  if (!SPREADSHEET_URI) {
    console.error('Spreadsheet URI is not present');
    return;
  }

  try {
    const spreadsheetRequest = await fetch(SPREADSHEET_URI);
    const dataText = await spreadsheetRequest.text();
    const formattedJSONText = dataText
      .replace(/\/\*O_o\*\/\ngoogle\.visualization\.Query\.setResponse\(/gm, '')
      .replace(/\);$/gm, '');

    fs.writeFileSync(OUTPUT_PATH, formattedJSONText);
    console.log('Successefuly saved data as JSON file');
  } catch (e) {
    console.error(e, "Couldn't get data from server");
  }
};

fetchSpreadsheetData();
