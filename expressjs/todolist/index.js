const express = require('express');
const app = express();
const todosRoutes = require('./routes/todos.js');

app.all('*', (req,res,next)=> {
    console.log('i am the all * middleware');
    next();
});
app.use('/todos', todosRoutes);
app.listen(4000, ()=> console.log('listening on port 4000'));