const express  =  require("express");

const app = express();

let port = 8080;
app.use(express.static("public"));
// app.set("views",path.join(__dirname,"/views"));

app.listen(port,(req,res) => {
    console.log("app is listing");
});

app.get("/", (req,res) =>{
    res.send("This is my home page ");
});

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    // console.log(username);
    const instadata = require("./data.json");
   const data = instadata[username];
 
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
   
   
})
