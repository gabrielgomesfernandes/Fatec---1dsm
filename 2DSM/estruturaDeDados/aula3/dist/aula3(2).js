"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let char1 = (prompt("digite uma letra: ")).toLowerCase;
console.log(char1);
let char2 = (prompt("digite outra letra: "));
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
if (char1.charCodeAt(0) > char2.charCodeAt(0)) {
    let char = char1;
    console.log(char);
}
else {
    let char = char2;
    console.log(char);
}
//# sourceMappingURL=aula3(2).js.map