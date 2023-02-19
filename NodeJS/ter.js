const moment = require('moment');

let now = moment();

console.log("ISO")
console.log(now.format());

console.log("\nTime")
console.log(now.format("HH:mm:ss"));
console.log(now.format("h:mm:ss a"));

console.log("\nDate")
console.log(now.format("dddd, MMMM Do YYYY"));
console.log(now.format("YYYY-MM-DD"));

console.log("\nLocalized")
console.log(now.format("LT"));
console.log(now.format("LTS"));
console.log(now.format("LTS"));
console.log(now.format("L"));
console.log(now.format("l"));