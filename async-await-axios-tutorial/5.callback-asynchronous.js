console.log("hello");
let change = document.querySelector("#heading1")
let change2 = document.querySelector("#heading2")
let change3 = document.querySelector("#heading3")
//callback hell
setTimeout(() => {
    change.textContent = "heading 1";
    setTimeout(() => {
        change2.textContent = "heading 2";
        setTimeout(() => { change3.textContent = "heading 3"; }, 1000);
    }, 1000);
}, 1000);

/////////callback-hell structure 
setTimeout(() => { 
    setTimeout(() => { 
        setTimeout(() => { 
            
        },1000);
    },1000);
}, 1000);