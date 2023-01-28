function fun1(callback){
    console.log("print 1");
    callback()
}
fun1(()=>{
    console.log("print 2")
})

//OR

// function fun1(fun2){
//     console.log("print 1");
//     fun2()
// }
// function fun2(){
//     console.log("print 2");
// }
// fun1(fun2)