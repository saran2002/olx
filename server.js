const express=require('express');
const app=express();
const{users}=require('./usermodel');
const{users1}=require('./usermodel2');

const{users2}=require('./usermodel3');
const{userss}=require('./usermodel4');
const mongoose=require('mongoose');
const bp=require('body-parser');
app.use(express.json())
const cors=require('cors');
app.use(bp.urlencoded({extended:true}))
app.use(cors())


mongoose.connect("mongodb+srv://SARAN1:SARAN1@cluster0.2qx9w.mongodb.net/olx")
.then(() => {
    console.info('connect successfully')
})
.catch(() => {
    console.error('connection error');
});



app.get("/login",async(req,res)=>{
    console.log("h1");
    res.sendFile(__dirname+"/register.html");
})



app.get("/login1",async(req,res)=>{
    console.log("h1");
    res.sendFile(__dirname+"/display.html");
})


app.get('/get', async (req,res)=>{
    console.log("hello");
    // const email=req.body.email;
    const data= await userss.find();
    // {"email":email}
   console.log(data.length);
    res.json(data);
  
})


app.post('/del', async (req,res)=>{
    const mobile=req.body.mobile;
    const data= await users.find({"mobile":mobile});
    await users.deleteOne(data[0]);
    console.log(data.length);
    res.json({data}); 
})
app.post('/up', async (req,res)=>{
    const email=req.body.email;
    const fname=req.body.fname;
    const data= await users.findOneAndUpdate(email,{$set:{"fname":fname}});
    console.log(data);
    res.json(data[0]); 
})
app.post("/insert1",async(req,res)=>
{
    console.log("hi ");
    var user1=new users1();
    user1.uname=req.body.uname;
    user1.rno=req.body.rno;
    user1.pno=req.body.pno; 
    console.log(user1)
    user1.save((err,data)=>{
        if(err){
            console.log(err)
        }
        else
        {
            res.redirect("/login1");
        }
    })
})



app.post("/insert2",async(req,res)=>
{
    console.log("hi ");
    var user2=new users2();
    user2.tarea=req.body.tarea; 
    console.log(user2)
    user2.save((err,data)=>{
        if(err){
            console.log(err)
        }
        else
        {
            res.redirect("/logi");
        }
    })
})

app.post("/insert",async(req,res)=>
{
    console.log("hi jgre");
    var user=new users();
    user.email=req.body.email;
    user.pass=req.body.pass;
    
    user.save((err,data)=>{
        if(err){
            console.log(err)
        }
        else
        {
            console.log("hello1212");
            res.redirect("/login");
        }    
    })
});


app.post("/inserts",async(req,res)=>
{
    console.log("hi jgre");
    var users=new userss();
    users.pname=req.body.pname;
    users.rate=req.body.rate;
    
    users.save((err,data)=>{
        if(err){
            console.log(err)
        }
        else
        {
            console.log("hello1212");
            // res.redirect("/login");
        }    
    })
});

app.listen(5000,function(){
    console.log("ok1");
})