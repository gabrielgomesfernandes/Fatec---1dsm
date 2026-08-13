const prompt = require('prompt-sync')();


let x:number = parseInt(prompt("Digite um número:"))
let y:number = parseInt(prompt("Digite outro número:"))
let z: number[] = []

if (x < y) {
    console.log(x)
} else {
    for (let num = 1; num < x; num++){
        z.push(num)
    }
    z.forEach((z) => {
        console.log(z)
    })
}