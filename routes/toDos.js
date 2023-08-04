const path = require('path');

const express = require('express');

const toDosRemainingController = require('../controllers/toDosRemaining');
const toDosDoneController = require('../controllers/toDosDone');


const router = express.Router();

router.post('/add-toDo', toDosRemainingController.postRequest);
router.get('/get-toDos', toDosRemainingController.getRequest);
router.delete('/delete-toDo/:id',toDosRemainingController.deleteRequest);


router.post('/tick-toDo', toDosDoneController.postRequest);
router.get('/fetchToDosDone', toDosDoneController.getRequest);




module.exports = router;