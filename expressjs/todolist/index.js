const express = require('express');
const app = express();
const todosRoutes = require('./routes/todos.js');

app.use(express.urlencoded({extended: true}));

//registering the middleware in order
//app.use('/todos/:id',logger);
app.use('/todos', todosRoutes);
app.listen(4000, ()=> console.log('listening on port 4000'));