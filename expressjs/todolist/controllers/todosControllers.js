const data = require('../data.json');

function getTodos(){
    return data.todos;
}

function getTodoById(id){
    return data.todos.find((todo)=> todo.id === +id);
}

function deleteTodo(id){
    const idx = data.todos.findIndex((todo)=> todo.id === +id);
    if(idx> -1){
        const ele = data.todos.splice(idx,1);
        return ele;
    }
    return 0;
}

function addTodo({todo,completed,list}){
    const newtodo = {todo,completed,list}
    data.todos.unshift(newtodo);
    return newtodo;
}

module.exports = {
    getTodos,
    getTodoById,
    deleteTodo,
    addTodo
}