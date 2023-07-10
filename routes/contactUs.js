const path= require('path');
const express=require('express');
const rootDir = require('../util/path')

const router=express.Router();


router.get('/',(req, res, next)=>{
res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
});

router.post('/',(req, res, next)=>{
    console.log(req.body.name);
    console.log(req.body.emailID);
res.redirect('/success');
});

module.exports=router;
