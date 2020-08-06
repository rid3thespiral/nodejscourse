const EventEmitter = require('events');
const evt = new EventEmitter();


//listen a new event called newData
evt.on('newData', data => {
    console.log('onEvent detected');
    console.log(data);
})

//emit an event called newData, with data
evt.emit('newData', ['a','b']);

//listen a new event called newData
evt.once('newData', data => {
    console.log('only once detected');
    console.log(data);
})

//emit an event called newData, with data
evt.emit('newData', ['a','b','c']);