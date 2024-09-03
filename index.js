const express=require('express')
const app=express()
const port =3000;
const path=require('path')
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use('/',require(path.join(__dirname,'routes/blog.js')))

app.use(express.static(path.join(__dirname,"public")))
app.get("/hello/:name",(req,res)=>{
    res.send("Home world " + req.params.name)
})
app.get("/about",(req,res)=>{
    // res.send("about page")
    res.sendFile(path.join(__dirname,'index.html'))
    res.json({
        "name":"avantika"
    })
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
}) 