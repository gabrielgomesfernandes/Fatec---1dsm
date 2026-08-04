"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = function (v1, v2) {
    let res = [];
    for (let i = 0; i < v1.length; i++) {
        res[i] = v1[i] + v2[i];
    }
    return res;
};
const vet1 = [5, 3, 1, 8, 2];
const vet2 = ["M", "a", "r", "i", "a"];
console.log("Resultado:", a(vet1, vet2));
//# sourceMappingURL=quatro.js.map