"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome = "";
    idade = 0;
    print() {
        console.log(`${this.nome}, ${this.idade}`);
    }
}
const prof = new Pessoa();
prof.nome = "Arley";
prof.idade = 49;
prof.print();
//# sourceMappingURL=um.js.map