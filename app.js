const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"))


 app.get("/",function(req,res){  
    const toDate = new Date();
    var option = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day = toDate.toLocaleDateString("en-US",option); 
    res.render("index",{
        datefor:day,
    })
 });



  
app.listen(3000,function(){
    console.log("Server started on port 3000");
})
