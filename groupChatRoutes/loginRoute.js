const express= require('express')

const router=express.Router();

router.get('/login', (req, res, next)=>{

res.send('<form onsubmit="localStorage.setItem(`userName`, document.getElementById(`userName`).value)"action="/login" method="POST"><label for="userName">UserName: </label><input type="text" name="userName" id="userName" placeHolder="username"><br><button type="submit">Login</button></form>')

})

router.post('/login', (req, res, next)=>{  
    console.log(req.body);
res.redirect('/')
})

module.exports=router;