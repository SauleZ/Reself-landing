// j(7, 8, 12, "test.xlsx");
//
// function j(name, phone, language, file) {
//   var xlsx = require("xlsx")
//
//   var wb = xlsx.readFile(file);
//
//   var ws = wb.Sheets[wb.SheetNames[0]]; //"Лист1"
//   xlsx.utils.sheet_add_aoa(ws, [
//     [name, phone, language]
//   ], {origin: -1});
//   xlsx.writeFile(wb, file);
//
//   // var data = xlsx.utils.sheet_to_json(ws);
//   //
//   // var newData = data.map(function (record) {
//   //   var name = record.Name;
//   //   var phone = record.Phone;
//   //   var lang = record.Language;
//   //   record.Name = name;
//   //   record.Phone = phone;
//   //   record.Language = lang;
//   //   record.Test = phone-name;
//   //   return record;
//   // });
//
// // console.log(newData);
//
//   // var newWB = xlsx.utils.book_new();
//   // var newWS = xlsx.utils.json_to_sheet(newData);
//   // xlsx.utils.book_append_sheet(newWB, newWS, "New Data");
//   // xlsx.writeFile(newWB, "NewDataFile.xlsx");
// }
//
// // function f(record) {
// //   var name = record.Name;
// //   var phone = record.Phone;
// //   var lang = record.Language;
// //   record.Name = name;
// //   record.Phone = phone;
// //   record.Language = lang;
// //   return record;
// // }
// import {createRequire} from 'module';
// const require = createRequire(import.meta.url);

function j(name, phone, language) {
  alert(language)
  var xlsx = require("xlsx")
  alert("SAULEE");

  var wb = xlsx.readFile("test.xlsx");
  alert("SAULEE");
  console.log(wb);

  var ws = wb.Sheets[wb.SheetNames[0]]; //"Лист1"
  xlsx.utils.sheet_add_aoa(ws, [
    [name, phone, language]
  ], {origin: -1});
  xlsx.writeFile(wb, "test.xlsx");
}
