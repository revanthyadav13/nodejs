const express= require('express');

const router=express.Router();


router.get('/add-product',(req, res, next)=>{
res.send('<form action="/admin/add-product" method="POST"><label for="title">Title: </label><input type="text" name="title"><br><label for="size">Size: </label><input type="text" name="size"><br><button type="submit">Add Product</button></form>')
})

router.post('/add-product',(req, res, next)=>{
console.log(req.body);
res.redirect('/shop');
})

module.exports=router;
