const express= require('express');
const fs= require('fs');

const router=express.Router();

router.get('/', (req, res, next)=>{
fs.readFile('userName.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        data="no chat exists";
      }
res.send(`${data}<form onsubmit="document.getElementById('userName').value=localStorage.getItem('userName')" action="/" method="POST"> <label for="message">ChatBox: </label> <input type="text" name="message" id="message" placeHolder="message"><br> <input type="hidden" name="userName" id="userName"><br> <button type="submit">send</button></form>`);

})
})

router.post('/', (req, res, next)=>{
    console.log(`${req.body.userName}:${req.body.message}`);
    fs.writeFile('userName.txt',`${req.body.userName}: ${req.body.message}`, {flag:'a'}, err => {
  if(err){
    console.log(err);
  }
res.redirect('/');
});
});



module.exports=router;