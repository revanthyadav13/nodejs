const path = require('path');

const express = require('express');

const toDoController = require('../controllers/toDos');

const router = express.Router();

router.post('/add-toDo', toDoController.postRequest);
router.get('/get-toDos', toDoController.getRequest);
router.delete('/delete-toDo/:id',toDoController.deleteRequest);




module.exports = router;