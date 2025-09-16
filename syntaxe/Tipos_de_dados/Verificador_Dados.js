// O operador typeof em JavaScript é usado para verificar o tipo de dado de um valor ou variável. Ele sempre retorna uma string indicando o tipo.


console.log(typeof "Nome")// retorna string

console.log(typeof 123)// retorna number

console.log(typeof true)// retorna boolean

console.log(typeof undefined)//retorna undefined


//O typeof funciona tambem para Bigint e Symbol

let simbolo = Symbol("id");
let big = 1234567890123456789012345678901234567890n;

console.log(typeof simbolo);       // "symbol"

console.log(typeof big);           // "bigint"
