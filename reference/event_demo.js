const EventEmitter = require('events')

//Create Emitter class
class MyEmitter extends EventEmitter {

}

//Init object
const myEmitter = new MyEmitter()

//Event listener
myEmitter.on('event', () => console.log('Event Fired'))

//Init event - now when we run node event_demo, we get an event fired and if I run this a bunch of times it will fire a bunch of times. 
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
