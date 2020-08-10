const express = require('express');
const app = express();


app.use(express.urlencoded({extended: true}));

//registering the middleware in order
//app.use('/todos/:id',logger);
const todosRoutes = require('./routes/todos.js');
const listsRoutes = require('./routes/lists.js');
app.use('/todos', todosRoutes);
app.use('/lists', listsRoutes);
app.listen(4000, ()=> console.log('listening on port 4000'));