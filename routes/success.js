const path= require('path');
const express=require('express');
const sucessController = require('../controllers/success')

const router=express.Router();


router.get('/', sucessController.getSuccess);

module.exports=router;
