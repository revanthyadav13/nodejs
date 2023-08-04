const ToDosDone = require('../models/toDosDone');
const ToDosRemaining = require('../models/toDosRemaining');


exports.postRequest =async (req, res, next)=>{

    try {
    const id  = req.body.id;
    const toDo = await ToDosRemaining.findByPk(id);
    console.log(id);
    console.log(toDo);
    if (!toDo) {
      return res.status(404).json({ error: 'ToDo not found' });
    }

    await ToDosDone.create({
      id:toDo.id,
      toDoName: toDo.toDoName,
      description: toDo.description,
    });

    // Delete the ToDo item from the 'toDosRemaining' table
    await toDo.destroy();

    res.json({ message: 'toDosRemaining ticked and moved to toDosDone successfully' });
    }catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }  
}

exports.getRequest =async (req, res, next)=>{
 const toDos= await ToDosDone.findAll();
    res.status(200).json({allToDosDone:toDos});
  }
