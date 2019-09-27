// function isNum (x) {
//   return typeof x === 'number'
// }

// User CMS from Stackoverflow: https://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric/1830844#1830844
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }

// jQuery (2.2-stable):
// let isNumeric = function (obj) {
//   const realStringObj = obj && obj.toString();
//   return !Array.isArray(obj) && (realStringObj - parseFloat(realStringObj) + 1) >= 0;
// };

// Angular 4.3
// function isNumeric (v) {
//   // if (typeof v === 'string') v = v.replace(/,/g, '');
//   return !isNaN(v - parseFloat(v))
// }

// Yahoo! UI
// let isNumeric= function(o) {
//   return typeof o === 'number' && isFinite(o);
// };

// function isNumeric(n) {
//   let num = parseFloat(n);
//   return !Number.isNaN(num) && Number.isFinite(num);
// }

export {}