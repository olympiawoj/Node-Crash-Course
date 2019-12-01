const EventEmitter = require('events')
const uuid = require('uuid')


console.log(uuid.v4())
console.log(uuid.v4())
console.log(uuid.v4())
console.log(uuid.v4())

//class Logger
class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg })
    }
}

// module.exports = Logger

// const Person = require("./person.js")

// //Instantiate a Person object from it
// const person1 = new Person("John Doe", 30)



// person1.greeting();

const Logger = require('./logger')

const logger = new Logger();

logger.on('message', (data) => console.log(`Called Listener`, data))

//have to call log method 
logger.log('Hello world')
logger.log('Hello world')
logger.log('Hello world')