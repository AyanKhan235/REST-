const express = require("express");
const app = express();
const path=require("path");
const {v4 : uuidv4}=require('uuid');
const port =8080;
const methodOverride=require("method-override");
app.use(methodOverride('_method'));

let posts=[
    {   id:uuidv4(),
        username:"AYAN",
        content:" i am in 3rd year guys"

    },
    {   id:uuidv4(),
        username:"Amaan",
        content:"Amaan is a brother of developer"

    }, 
    {   id:uuidv4(), 
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

app.patch("/posts/:id",(req,res)=>{ 
    let{id}=req.params;
    let newContent=req.body.content;
    let post =posts.find((p)=> id===p.id);
    post.content=newContent;
    // console.log(post);
    // res.send("patch Request Working");
    res.redirect("/posts");

});
app.delete("/posts/:id", (req,res)=>{
    let {id}=req.params;
    // filter arrays ko return krega 
     posts=posts.filter((p)=> id!==p.id);
     res.redirect("/posts");
})
app.get("/posts/:id/edit",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("edit.ejs",{post});

});
app.post("/posts", (req,res)=>{
    let {username, content}=req.body;
    let id=uuidv4();
    posts.push({id, username,content});
    // res.send("Working request properly"); 
    res.redirect("/posts")


})



app.listen(port, (req, res)=>{
    console.log(`port is listening on this port num ${port}`);
})