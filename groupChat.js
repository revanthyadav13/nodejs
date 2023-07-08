const express=require('express');
const fs=require('fs');
const bodyParser=require('body-parser');

const groupChat=express();

const loginRoutes=require('./groupChatRoutes/loginRoute');
const messageRoutes=require('./groupChatRoutes/messageRoute');

groupChat.use(bodyParser.urlencoded({extended:false}));


groupChat.use(loginRoutes);
groupChat.use(messageRoutes);

groupChat.listen(3000)