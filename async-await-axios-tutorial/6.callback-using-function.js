console.log("hello");
let change1 = document.querySelector("#heading1")
let change2 = document.querySelector("#heading2")
let change3 = document.querySelector("#heading3")
//basic function jisme chang1 elemet change ho jayega 

/*
function changeContext (element, changedText , time){
    setTimeout(()=>{
        element.textContent = changedText;
    },time)

}

changeContext(change1 , "heading 1" , 1000)
*/

//now we want ki ek k bad ek elemen ka content change ho after one sec of the previous element, for that we will use callback functions

function changeContext(element, changedText, time, onSuccessCallBack, onFilureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = changedText;
            onSuccessCallBack();
        }
        else {
            onFilureCallback();
        }
    }, time)

}
//this is also called pyramid of doom
changeContext(change1, "heading 1", 1000, () => {
    changeContext(change2, "heading 2", 1000, () => {
        changeContext(change3, "heading 3", 1000, () => {
            console.log("all three done")
        }, () => { console.log("Error: there is some error") })
    }, () => { console.log("Error: there is some error") })

}, () => { console.log("Error: there is some error") })