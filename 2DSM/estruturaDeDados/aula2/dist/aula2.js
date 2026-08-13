"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require('prompt-sync')();
let x = parseInt(prompt("Digite um número:"));
let y = parseInt(prompt("Digite outro número:"));
let z = [];
if (x < y) {
    console.log(x);
}
else {
    for (let num = 1; num < x; num++) {
        z.push(num);
    }
    z.forEach((z) => {
        console.log(z);
    });
}
//# sourceMappingURL=aula2.js.map