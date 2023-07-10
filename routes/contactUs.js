const path= require('path');
const express=require('express');
const contactUsController = require('../controllers/contactUs');

const router=express.Router();


router.get('/', contactUsController.getContactUs);

router.post('/', contactUsController.postContactUs);

module.exports=router;
