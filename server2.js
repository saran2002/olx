const express=require('express');
const app=express();
const{users}=require('./usermodel2');
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


app.get('/get', async (req,res)=>{
    console.log("hello");
    // const email=req.body.email;
    const data= await users.find();
    // {"email":email}
   console.log(data);
   console.log(data[0]);
    res.json(data);
  
})

app.post('/del', async (req,res)=>{
   // console.log(mobile);
    const mobile=req.body.mobile;
    
    const data= await users.find({"mobile":mobile});
    await users.deleteOne(data[0]);
   
    console.log(data);
    res.json({data});

  
})



app.post('/up', async (req,res)=>{
    const email=req.body.email;
    const fname=req.body.fname;
    const data= await users.findOneAndUpdate(email,{$set:{"fname":fname}});
    
   
    console.log(data);
    
    
    res.json(data[0]);

  
})



app.post("/insert2",async(req,res)=>
{
    console.log("hi ");
    var user=new users();

    user.uname=req.body.uname;
    user.rno=req.body.rno;
    user.pno=req.body.pno;
 
    

   

    console.log(user)
    user.save((err,data)=>{
        if(err){
            console.log(err)
        }
        else
        {
            console.log("hello");
            //console.log((__dirname+ '/display.html'))
            res.sendFile(__dirname+'display.html');
        }
    })
})



app.listen(5000,function(){
    console.log("ok1");
})