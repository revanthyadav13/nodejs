const ToDo = require('../models/toDos');


exports.postRequest =async (req, res, next)=>{

    try{
     const toDoName=req.body.toDoName;
    const description=req.body.description;

    console.log(toDoName);
     console.log(description);
    const data= await ToDo.create({toDoName:toDoName, description:description});
    res.status(201).json({newToDoDetail:data});
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
   
}

exports.getRequest =async (req, res, next)=>{
 const toDos= await ToDo.findAll();
    res.status(200).json({allToDos:toDos});
  }


  exports.deleteRequest= async (req, res, next) => {
  try {
    const toDoId = req.params.id;

     await ToDo.destroy({
      where: { id: toDoId }
    });

    res.status(200); 
  } catch (error) {
    res.status(500).json({
      error: error.message 
    });
  }
}