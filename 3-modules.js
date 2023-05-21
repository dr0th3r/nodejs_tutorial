//Modules
const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-granade')

sayHi(john)
sayHi(peter)
sayHi('Susan');