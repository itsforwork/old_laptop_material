const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items=["Eat", "Code" , "Sleep" , "Repeat"];      
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static("public"))

app.get("/", function (req, res) {

const currentDate = new Date();
const options = { weekday: 'long', day: 'numeric' , month: 'long'};
const day= currentDate.toLocaleDateString('en-us', options);

res.render("list" , {kindOfDay: day, newListItem: items})
// list is a template inside views folder, and kindofday is variable present in list.ejs and day is a variable stored inside app.js

//inside res.send or res.write , we can only return string here not number
});

app.post("/" , function(req,res) {
    var item = req.body.newItem;
    items.push(item)
    console.log(items); 
    res.redirect("/");
    
});

app.listen(3000, function () {
    console.log("server started on port 3000")
})  

