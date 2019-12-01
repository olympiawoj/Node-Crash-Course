const os = require('os')

//Platform-  darwin is platform for mac, win32 for windows, 
console.log(os.platform())

//CPU Architecture - x64
console.log(os.arch())

//CPU Core Info - object w/ info for every core of CPUs
console.log(os.cpus())

//Free memory- cool b/c build apps that have to do w your system 
console.log(os.freemem())

//Total memory
console.log(os.totalmem())


//Home Directory
console.log(os.homedir())

//Uptime
console.log(os.uptime())