console.log("JS is connected to html...");
let change1 = document.querySelector("#heading1")
let change2 = document.querySelector("#heading2")
let change3 = document.querySelector("#heading3")
//alternate of pyramid of doom example
function mypromise(element, changedText, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) 
            {
                element.textContent = changedText;
                resolve("done");
            }
            else {
                reject("Error")
            }
        }, time);
    })
}

mypromise(change1, "Heading 1", 1000)
    .then(() => { return mypromise(change1, "Heading 1", 1000) })
    .then(() => { return mypromise(change2, "Heading 2", 1000) })
    .then(() => { return mypromise(change3, "Heading 3", 1000) })
    .catch((error) => { console.log(error) })