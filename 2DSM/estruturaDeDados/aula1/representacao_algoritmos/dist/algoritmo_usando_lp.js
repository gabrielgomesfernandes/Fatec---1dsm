"use strict";
/* Expressando algoritmos diretamente com
** a linguagem de programação.
** Autor: Fabrício Galende M. de Carvalho.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
var numero_1;
var numero_2;
var resultado;
const prompt = (0, prompt_sync_1.default)();
numero_1 = parseFloat(prompt("Primeiro número: "));
numero_2 = parseFloat(prompt("Segundo número: "));
resultado = numero_1 + numero_2;
console.log(resultado);
