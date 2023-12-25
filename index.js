const express = require("express");
const app = express();
const path=require("path");
const port =8080;

let posts=[
    {   id:"1a",
        username:"AYAN",
        content:" i am in 3rd year guys"

    },
    {   id:"2b",
        username:"Amaan",
        content:"Amaan is a brother of developer"

    }, 
    {   id:"3c", 
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
app.get("/posts/:id", (req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    // console.log(post);
    res.render("show.ejs", {post});
})
app.post("/posts", (req,res)=>{
    let {username, content}=req.body;
    posts.push({username,content});
    // res.send("Working request properly"); 
    res.redirect("/posts")


})



app.listen(port, (req, res)=>{
    console.log(`port is listening on this port num ${port}`);
})