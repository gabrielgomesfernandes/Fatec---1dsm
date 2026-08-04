"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum = (a, b) => a + b;
const dif = (a, b) => a - b;
//uma função pode receber outra função como parâmetro
const operacao = (f, a, b) => f(a, b);
console.log("5 + 3:", operacao(sum, 5, 3));
console.log("5 - 3:", operacao(dif, 5, 3));
//# sourceMappingURL=dez.js.map