let stocks= {
    Fruits : ["apple","banana","cucumber","date"],
    liquid: ["water" , "ice"],
    toppings: ["chocolate" , "peanuts"]
}

let order = (fruitName, callback)=>{
    console.log("order placed, pls call production")
    console.log(fruitName)
    callback();
};  

let production= ()=>{
    console.log("order recieved , production starting")
};
//calling callback function-production inside order function
order(stocks.Fruits[0],production);