//Temos dois tipos de converção de dados, o implicito que o runtime ou o interpretador converte os dados sozinhos e o explicito, que converte de forma manual.

let exemplo = "5";

let exemplo2 = 5;

let resultadoEx = exemplo + exemplo2

console.log(typeof resultadoEx)
console.log(resultadoEx)

// Para que possamos realizar a conversão precisamos escolher o mesmo tipo de variável para todos os exemplos

//Numeros

let a = 10, b = "30";

let Conv = Number(b)

let c = a + Conv

console.log(c)

console.log("2"*3)// 6


// String

let numero = 456;

let converterString = String(numero);

console.log(typeof converterString)


// Bool 

let falso = 0;
let verdadeiro = 1;

let TornarVerdadeiro = Boolean(falso)
let TornarFalso = Boolean(verdadeiro)

console.log(TornarVerdadeiro)

console.log(typeof TornarVerdadeiro)

console.log(TornarFalso)

console.log(typeof TornarFalso)



