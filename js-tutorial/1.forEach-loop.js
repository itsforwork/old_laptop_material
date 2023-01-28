const arr= [
    {'name' : 'srishti' , 'age' : 22},
    {'name' : 'srishtiii' , 'age' : 22},
    {'name' : 'srishtiiiii' , 'age' : 22},
]

//simple for loop

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].name)
// }


//----------------------------------------------------------
//foreach loop takes a callback function as parameter
//and that callback function gives three arguments: 1.number itself, 2. index of that number, 3.the whole array


arr.forEach((obj,index,wholearr)=> {
    console.log(obj,index, wholearr)
    console.log(`first name of each object is ${obj.name}`)
});