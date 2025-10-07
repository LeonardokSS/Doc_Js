// Para que possamos realizar a conversão precisamos escolher o mesmo tipo de variável para todos os exemplos

//Numeros

let a = 10, b = "30";

let Conv = Number(b)

let c = a + Conv

console.log(c)

console.log("2"*3)// 6

                     
//let numeroSecreto = parseInt(Math.random() * VALORMAX + 1)
//Numero aleatório

let numero = Math.random()


console.log(numero)//NUMERO TOTALMENTE QUEBRADO

//Remover 1 casa
let numeroMaior = numero * 10
console.log(numeroMaior)


//Podemos arredondar o numero ulizando o parseINT
let numeroFinal = parseInt(numeroMaior)

console.log(numeroFinal)

