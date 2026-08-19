"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let num1 = parseInt(prompt("digite um número: "));
let num2 = parseInt(prompt("digite outro número: "));
if (num1 > num2) {
    let numMax = num1;
    console.log(numMax);
}
else {
    let numMax = num2;
    console.log(numMax);
}
//# sourceMappingURL=aula3.js.map