const numbers= [1,2,3,4]

//array.map takes callback function as an parameter, which takesnarray's number and index in argument and this callback function return an array with modified values
const squarenumber= numbers.map((number)=>{
    return (number*number)
    
})
console.log(squarenumber)