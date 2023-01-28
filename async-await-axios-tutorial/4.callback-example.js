// function addtwonum(num1 , num2, callback1 , callback2) {
// if()
// {
//     callback1()
// }
// else{
//     callback2()
// }
// }

// addtwonum(1, 2 , ()=>{} , ()=>{})

function addtwonum(number1, number2, callback1, callback2) {
    if (typeof number1==="number" && typeof number2==="number") {
        callback1(number1, number2);
    }
    else {
        callback2()
    }
}

addtwonum("1", 2, (num1, num2) => { 
    console.log(num1+ num2)
}, () => { console.log("wrong data types")})

