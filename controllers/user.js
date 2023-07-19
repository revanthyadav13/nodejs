const User = require('../models/user');


exports.postRequest =async (req, res, next)=>{

    try{
     const username=req.body.username;
    const phonenumber=req.body.phonenumber;
    const email=req.body.email;

    const data= await User.create({username:username, phonenumber:phonenumber, email:email});
    res.status(201).json({newUserDetail:data});
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
   
}

exports.getRequest =async (req, res, next)=>{
 const users= await User.findAll();
    res.status(200).json({allUsers:users});
  }


  exports.deleteRequest= async (req, res, next) => {
  try {
    const userId = req.params.id;

     await User.destroy({
      where: { id: userId }
    });

    res.status(200); 
  } catch (error) {
    res.status(500).json({
      error: error.message 
    });
  }
}
