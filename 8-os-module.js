const os = require('os');

// info about cur user
const user = os.userInfo()

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime() / 3600} hours`)

const curOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(curOs);