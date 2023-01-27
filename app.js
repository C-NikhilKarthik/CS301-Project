let express=require('express');
let app=express();
let mongoose=require("mongoose");
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render('index');
})
app.listen(3000,()=>{
    console.log("The server is up and running at port 3000");
})
