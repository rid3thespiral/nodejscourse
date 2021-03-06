const express = require('express');
const router = express.Router();
const {getTodoById, updateTodo, getTodos, deleteTodo, addTodo} = require('../controllers/todosControllers');

const logger = (req,res,next) => {
    if(req.params.id>100){
        next(new Error('id cannot be > 99'));
    }
    next();
}

router.all('*', (req,res,next)=> {
    console.log('i am the all * middleware');
    next();
}); 

router.get('/', (req,res)=>{
    res.json(getTodos());
}).get('/:id([0-9]+)', [logger, (req,res)=>{
    res.json(getTodoById(req.params.id));
}]).delete('/:id([0-9]+)', (req,res)=>{
    const deleted = deleteTodo(req.params.id);
    res.status(deleted? 200 : 404).json(deleted? deleted : null);
});

router.post('/', (req,res)=>{
    console.log(req.body);
    res.json(addTodo(req.body));
});

router.patch('/:id([0-9]+)', (req,res)=>{
    console.log(req.body, req.params.id);
    const uptodo = updateTodo(req.params.id,req.body);
    res.status(uptodo ? 200: 404).json(uptodo ? uptodo : 'record not found');
    res.json(updateTodo(req.params.id, req.body));
});

module.exports = router;