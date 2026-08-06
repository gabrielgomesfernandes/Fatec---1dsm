/* Expressando algoritmos diretamente com
** a linguagem de programação.  
** Autor: Fabrício Galende M. de Carvalho. 
*/

import promptSync from 'prompt-sync';
var numero_1: number;
var numero_2: number;
var resultado: number;

const prompt = promptSync();
numero_1 = parseFloat(prompt("Primeiro número: "));
numero_2 = parseFloat(prompt("Segundo número: "));
resultado = numero_1 + numero_2;
console.log(resultado);


