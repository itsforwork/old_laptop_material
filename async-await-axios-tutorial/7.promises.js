//producing promises
//we can return anything inside resolve and reject: string, number, object, array
let mypromises = new Promise((resolve, reject) => {
    let flag = true;
    if (flag) {
        resolve({apple: ["a"]});
    }
    else {
        reject("we have error")
    }
})

//consuming promises

mypromises
.then((myobj) => 
{
    console.log(myobj);
})
.catch((error) => 
{
    console.log(error);
})
