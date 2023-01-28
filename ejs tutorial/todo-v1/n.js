//string of json objects
let userStr = '{"pid":1200,"cost": 44}';
//console.log('json string...' , userStr);

//converting json string to object
let userObj = JSON.parse(userStr);
//console.log('js objects...' , userObj);

let input= [2,
    //json strings 
    '{"cost":10,"quantity": 1}',
    '{"cost":20,"quantity": 2}',
    '{"cost":30,"quantity": 3}'
]
//passing array to function using spread function
convert(...input);
var sum= 0;
function convert(){
    //skipping first element i.e. 2
    input.slice(1).forEach((Element)=>{
     //converting json string to object
     var store=   JSON.parse(Element)
     var prod= (store.quantity) * (store.cost)
     sum = sum+ prod
     
     })
     return sum
}
//output
console.log('Result...', convert())

