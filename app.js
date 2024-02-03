const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));



 app.get("/",function(req,res){
    
    const toDate = new Date();

    var option = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day = toDate.toLocaleDateString("en-US",option); 
    
        console.log(day)
 });


  
app.listen(3000,function(){
    console.log("Server started on port 3000");
})
