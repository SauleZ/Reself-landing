// import xlsx from 'xlsx';
// import {createRequire} from 'module';
// const require = createRequire(import.meta.url);

// j("lol", "lol", "lol");

function j(name, phone, language) {
  alert(language)
  var xlsx = require("xlsx")

  var wb = xlsx.readFile("test.xlsx");

  var ws = wb.Sheets[wb.SheetNames[0]]; //"Лист1"
  xlsx.utils.sheet_add_aoa(ws, [
    [name, phone, language]
  ], {origin: -1});
  xlsx.writeFile(wb, "test.xlsx");
}
