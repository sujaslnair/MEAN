const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const db ='mongodb+srv://user_suja:suja_nandan85@mycluster.txxs0.azure.mongodb.net/eventdb?retryWrites=true&w=majority'

 const User = require('../models/user');
 const Doctor = require('../models/doctor');

 var messenger=require("./email");

mongoose.connect(db,function(err){
    if(err){
        console.error("Error"+err);
    }
    else{
        console.log("Connected to mongodb");
        // messenger.printer("sujanandan@gmail.com");
    }
});


router.get('/',(req,res) => {
    res.send("From Api");
});

router.post('/userregister',(req,res)=>{
    let userData=req.body;
    console.log(userData);
    let user=new User(userData);
    user.save((err,registeredUser)=>{
        if(err){
           
            res.status(406).send(err);
            console.log(err);
        }
        else{
             res.status(200).send(registeredUser);
           
        }
    })
});
router.post('/userlogin',(req,res)=>{
    let userData = req.body;
    console.log(userData.email);
    console.log(userData.password);
    User.findOne({uemail:userData.email},(err,data)=>{
        if(err){
            console.log(err);   
            res.status(400).send("Error in database");         
        }
        else{
            console.log(data);
            if(!data){
                console.log(data);
                res.status(401).send("Invalid Email");
            }
            else
            if(data.upwd !== userData.password){
                console.log(data.upwd);
                // console.log(userdata.password);
                res.status(402).send("Invalid Password");
            }
            else{
                res.status(200).send(data);
            }
        }
    })
})

router.post('/dregister',(req,res)=>{
    let doctorData=req.body;
    console.log(doctorData);
    let doctor=new Doctor(doctorData);
    doctor.slot1="available";
    doctor.slot2="available";
    doctor.slot3="available";
    doctor.slot4="available";
    doctor.timing="9am-1pm";
    doctor.save((err,registereddoctor)=>{
        if(err){
            console.log(err);
            res.status(406).send("Email/Username already");
        }
        else{
             res.status(200).send(registereddoctor);
           
        }
    })
});
router.post('/dlogin',(req,res)=>{
    let doctorData = req.body;
    console.log(req.body);
    console.log(doctorData.password);
    Doctor.findOne({email:doctorData.email},(err,data)=>{
        if(err){
            console.log(err);  
            res.status(400).send("Error in database");          
        }
        else{
            console.log(data);
            if(!data){
                console.log(data);
                 res.status(401).send("Invalid Email");
            }
            else
            if(data.pwd !== doctorData.password){
                console.log(data.pwd);
                console.log(doctorData.password);
                // console.log(userdata.password);
                res.status(402).send("Invalid Password");
            }
            else{
                res.status(200).send(data);
            }
        }
    })
})

router.post('/doctor',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    let doctorloc = req.body.loc;
    console.log(req.body.loc);
    Doctor.find({place:doctorloc},(err,data)=>{
        if(err){
            console.log(err);            
        }
        else{
            console.log(data);         
            res.status(200).send(data);
        }
    })
});
router.post('/doctor/slot',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    const Doctor = require('../models/doctor');
    let doctorloc = req.body.date;
    console.log("inside slot");
    console.log(req.body.date);
    console.log(req.body.username);
    console.log(req.body.details._id);
    console.log(req.body.slot);
    let slot=req.body.slot;
    var slot1,slot2,slot3,slot4;
    if(slot=='slot1'){
     slot1=req.body.username;
     Doctor.findByIdAndUpdate({_id:req.body.details._id},
        {$set:{"username":req.body.username,"date":req.body.date,
        "slot1":slot1}},(err,doc)=>{
        if(err){
            console.log(err);
            res.send(err); }
        else{
            console.log(doc);
            messenger.printer(slot1,req.body.date);
            res.send(doc); }
    })
    }
    if(slot=='slot2'){
     slot2=req.body.username;
     Doctor.findByIdAndUpdate({_id:req.body.details._id},
        {$set:{"username":req.body.username,"date":req.body.date,
        "slot2":slot2}},(err,doc)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(doc);
            messenger.printer(slot2,req.body.date);
            res.send(doc);
        }
    })}
    if(slot=='slot3'){
    slot3=req.body.username;Doctor.findByIdAndUpdate({_id:req.body.details._id},
        {$set:{"username":req.body.username,"date":req.body.date,
        "slot3":slot3}},(err,doc)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(doc);
            messenger.printer(slot3,req.body.date);
            res.send(doc);
        }
    })
}
    if(slot=='slot4'){
    slot4=req.body.username;Doctor.findByIdAndUpdate({_id:req.body.details._id},
        {$set:{"username":req.body.username,"date":req.body.date,
        "slot4":slot4}},(err,doc)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(doc);
            messenger.printer(slot4,req.body.date);
            res.send(doc);
        }
    })
    }  
})

router.get('/appointments',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    
    Doctor.find()
    .then(function(appointments){
        console.log(appointment);
        res.send(appointments);
    })
});

router.get('/adminView',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    
    Doctor.find()
    .then(function(appointments){
        console.log(appointments);
        res.send(appointments);
    })
    .catch("error");
});

router.delete('/delete/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
   console.log(req.params.id) ;
   Doctor.remove({_id:req.params.id},(err,user)=>{
    if(err){
        console.log(err);        
    }
    else{
        console.log(user);
    }
})
   
});

router.get('/edit/:id',function(req,res){
    console.log("inside edit"+req.params.id);
        Doctor.findById(req.params.id,(err,data)=>{
            if (!err) {
                console.log(data);
                return res.send(data)}
            else { console.log('Error in retireiving doctor details for updation')}
        });
     
     
     
     router.post('/update/:id',function(req,res){
         Doctor.findByIdAndUpdate(req.params.id,
             { $set: req.body },
                     (err,data)=>{
                         if (!err) { res.status(200).send(data);
                                     console.log(' update successfull')}
                         else { console.log('Error in  update' + err)}
                     })
        })
        })
    
router.get('/slotchange',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
       console.log("inside slot()");
            Doctor.updateMany({},
                {$set:{slot1:"available",slot2:"available",
                date:" ",slot3:"available",slot4:"available"
                                     }},(err,doc)=>{ 
                                     if(err)
                                     {
                                         console.log(err);
                                         res.send(err)
                                     }
                                    else{
                                      console.log(doc);
                                       res.send(doc);
                                     }
                                    });
        });


module.exports = router;