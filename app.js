const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Sequelize = require('sequelize');
const sequelize = require('./util/database');


const ToDosRemaining=require('./models/toDosRemaining');
const ToDosDone=require('./models/toDosDone');

const app = express();
app.use(cors());



const toDoRoutes=require('./routes/toDos')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/toDo',toDoRoutes);


sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
   app.listen(3000);
  })