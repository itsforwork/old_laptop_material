function mypromise() {
    let stocks= ["ibm" , "tcs" , "tata"]
    return new Promise((resolve, reject)=>{
        if(stocks.includes("tcs")){
            resolve(`${stocks[1]} is present`);
        }
        else{
            reject(` ERROR: ${stocks[1]} is not present`);
        }
    })
}

mypromise()
    .then((pass)=>{console.log(pass)})
    .catch((error)=>{console.log(error)})