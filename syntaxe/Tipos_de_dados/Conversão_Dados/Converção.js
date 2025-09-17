//Normalmente o JS realiza a conversão de dados automaticamente, no exemplo a seguir ele irar transormar o numero em string para realizar a soma

let exemplo = "5";

let exemplo2 = 5;

let resultadoEx = exemplo + exemplo2

console.log(resultadoEx)

// Para que possamos realizar a conversão precisamos escolher o mesmo tipo de variável para todos os exemplos

//Numeros

let num = "10";

let converterNum = Number(num);

let a = 10, b = 30;

let c = converterNum + a + b;

console.log(c)


// String

let numero = 456;

let converterString = String(numero);

console.log(converterString);

// Bool 

let falso = 0;
let verdadeiro = 1;

let TornarVerdadeiro = Boolean(falso)
let TornarFalso = Boolean(verdadeiro)

console.log(TornarVerdadeiro)
console.log(TornarFalso)


