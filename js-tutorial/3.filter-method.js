const arr=[1,2,3,4,5,6,7,8]
//filter method takes a callback function which always gives boolean values either true/false or 0/1

// and it returns an array consisting of values that satisfy the condition inside callback function

const even= arr.filter((num)=>{
    console.log(num%2===0)
    return num%2===0
})

console.log(even)