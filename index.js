const express = require("express");
const app = express();
const path=require("path");
const port =8080;

let posts=[
    {
        username:"AYAN",
        content:" i am in 3rd year guys"

    },
    {
        username:"Amaan",
        content:"Amaan is a brother of developer"

    }, {
        username:"babu",
        content:"this is my nick name "

    },
]





app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/posts", (req,res)=>{
    res.render("index.ejs", {posts});
})

app.get("/posts/new", (req,res)=>{
    res.render("form.ejs");
})
app.post("/posts", (req,res)=>{
    let {username, content}=req.body;
    posts.push({username,content});
    res.send("Working request properly"); 

})



app.listen(port, (req, res)=>{
    console.log(`port is listening on this port num ${port}`);
})