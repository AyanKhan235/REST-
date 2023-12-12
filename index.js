const express = require("express");
const app = express();
const path=require("path");
const port =8080;

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname,"public")));

app.get("/", (req,res)=>{
    res.send("Server working well");
})




app.listen(port, (req, res)=>{
    console.log(`port is listening on this port num ${port}`);
})