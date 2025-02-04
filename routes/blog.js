const express=require('express')
const router=express.Router();
const path=require('path')
const blogs=require('../data/blogs');
const { title } = require('process');
router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home')
})

router.get('/blog',(req,res)=>{
    res.render('blogHome',{
        blogs:blogs
    })
})
// router.get('/blog',(req,res)=>{
// blogs.forEach(element => {
//     console.log(element.title)
// });
// })
router.get('/blog/:slug',(req,res)=>{
    myBlog=blogs.filter((e)=>{
      return e.slug==req.params.slug;
    })
    res.render('blogPage',{
        title:myBlog[0].title,
        content:myBlog[0].content
    })
})
module.exports=router
