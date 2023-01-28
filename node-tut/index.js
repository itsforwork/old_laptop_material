const app= require('./app')
// console.log(app);
// console.log(app.z());



// filter method:
// The arr.filter() method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method. 
// filter method k andar ek callback function hota hai jisme koi specific condition di hoti hai
const arr=[7,7,9,0,4,1]
let r= arr.filter((item)=>{
    return item>6;})
console.log(r)
