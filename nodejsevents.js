const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor!');
  setTimeout(() => {
      console.log("Please turn of motor ! Its a gentle reminder");
  }, 3000);
});

console.log("Script is Running ")
console.log("The Script is stil  Running ")


myEmitter.emit('WaterFull');