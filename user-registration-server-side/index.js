// SEQUENCE OF SERVER MIDDLEWARE IS IMPORTANT , https://www.youtube.com/watch?v=WJNSNFJOaWU IN MINIT 39.30 IS EXPLAINED 

const express = require('express');
const server  = express();
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo');
    console.log('db connected')
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  const userSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    phone: String,
    email:String,
    

  });
  const User = mongoose.model('User', userSchema);





server.use(cors());
server.use(bodyParser.json());

server.listen(8080,()=>{
    console.log('server started')
})


server.post('/demo',async (req,res)=>{ // receving the poat req
    let user=new User();
    user.firstName=req.body.firstName;
    user.lastName=req.body.lastName;
    user.phone=req.body.phone;
    user.email=req.body.email;
    const doc= await user.save();



    console.log(doc) ;

    res.json(doc) // sending back response 
})

server.get('/demo',async (req,res)=>{ // receving the poat req
 const docs= await User.find({});



    console.log(docs) ;

    res.json(docs) // sending back response 
})
 
