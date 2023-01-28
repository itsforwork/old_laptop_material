const numbers=[1,2,3]

const sum= numbers.reduce((accumulator, currentValue)=>{
         return accumulator * currentValue;

},2)
//console.log(sum);


const arr= [
    {'name' : 'srishti' ,'age' : 22},
    {'name' : 'john' , 'age' : 22},
    {'name' : 'rohn' , 'age' : 22},
]
const arraysum = arr.reduce((acc,curr)=>{
    return acc +curr.age;
},0)

console.log(arraysum)
