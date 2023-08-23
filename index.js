const express = require('express');

const app = express();
const admin= express();

//app.enable('case sensitive routing')
//app.disable('case sensitive routing');
//app.enabled('case sensitive')
//app.disabled('case sensitive');

//const user=express();

//app.locals.title = "hellow coder";
//app.locals.name = "swarna";

//app.get('/',(req,res)=>{
    //console.log(app.locals.title, app.locals.name)
    //res.send("homepage");

//})

//admin.on('mount',function(parent){
    //console.log('admin mounted')
  //  console.log(parent)
//})

//admin.get('/',(req,res)=>{
 //   console.log(admin.mountpath)
  //  res.send("this is admin page");

//})

//user.get('/',(req,res)=>{
  //  res.send("this is user page");

//})

//delete method

//admin.delete('/',(req,res)=>{
  //  res.send("this is admin page-delete method");

//})

//admin.all('/',(req,res)=>{
  //  res.send("all method")
//})

//admin.get('/',(req,res)=>{
  //  res.send("this is admin page")
//})

//app.set("name","swarna")

//admin.get('/',(req,res)=>{
    //console.log(app.get("name"))
  //  res.send("this is admin page")
//})

//param

// admin.param('id',(req,res,next,id)=>{
//     const userDetails ={
//         userId : id,
//         userName : "swarna",
//         userAddress: "hfffd"
//     };
//     req.userDate = userDetails;
//     next();
// })

// admin.get('/user/:id',(req,res)=>{
//     console.log(req.userDate);
//     res.send("this is admin page");

// })

//route

admin.route('/adminpanel')
.get((req,res)=>{
    res.send("this is admin home")
})
.post((req,res)=>{
    res.send("this is reg")
})
app.use('/admin',admin)
//app.use('/admin/ouradmin',admin)
//app.use('/user',user)

app.listen(5000,()=>{
    console.log("server running")

})