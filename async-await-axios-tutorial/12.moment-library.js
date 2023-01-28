const moment = require("moment");
const mz =require('moment-timezone')
const m=moment() 
console.log(m) //gmt
console.log("deafult time" ,m.toISOString()) //utc time



console.log((moment(m.toISOString()))) //gmt
console.log(moment(moment(m.toISOString()))) //gmt

console.log(moment(m.toISOString()).tz("Asia/Calcutta").format('YYYY/MM/DD HH:mm:ss')) //local 

//console.log(moment.utc(moment(m.toISOString()).tz("Asia/Calcutta").format('YYYY/MM/DD HH:mm:ss')))


// const {format, zonedTimeToUtc,} = require("date-fns-tz")
// const today= new Date();
// const timeZone = "Asia/Calcutta";
// const t= zonedTimeToUtc(today, timeZone)
// console.log(today)
// console.log(t)

console.log(new Date()) //utc

console.log(new Date().toISOString())