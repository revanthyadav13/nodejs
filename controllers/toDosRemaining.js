const ToDosRemaining = require('../models/toDosRemaining');


exports.postRequest =async (req, res, next)=>{

    try{
     const toDoName=req.body.toDoName;
    const description=req.body.description;
    const data= await ToDosRemaining.create({toDoName:toDoName, description:description});
    res.status(201).json({newToDoDetail:data});
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
   
}

exports.getRequest =async (req, res, next)=>{
 const toDos= await ToDosRemaining.findAll();
    res.status(200).json({allToDos:toDos});
  }


  exports.deleteRequest= async (req, res, next) => {
  try {
    const toDoId = req.params.id;

     await ToDosRemaining.destroy({
      where: { id: toDoId }
    });

    res.status(200); 
  } catch (error) {
    res.status(500).json({
      error: error.message 
    });
  }
}

