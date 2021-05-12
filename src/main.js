console.log("webpack");

//common.js的模块化
const {add,mul} = require('./js/mathUtils')
console.log(add(20,40));
console.log(mul(30,50));

//ES6
import * as all from "./js/info"
console.log(all.height)
console.log(all.name)

require('./css/normal.css')