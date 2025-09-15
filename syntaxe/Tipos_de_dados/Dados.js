//Existem diversos dados em js, sejam eles: String, Number, Boolean, Null, Symbol(Imutável), Undefined e BigInt

//String

let nome = "Nome";

let objeto = "Cadeira";


//Number

let Number = 123;

let telefone = 1198888888;


//Boolean

let verdadeiro = true

let falso = false

//Undefined

let nada;

console.log(nada)

//Null

let vazio = null;

console.log(vazio)

//Symbol imutável é utilizado para criar identificadores únicos,propriedades "escondidas", não acessadas acidentalmente por código externo.

const id = Symbol('id');

const venda = {
    nome:"pedro",
    [id]: 1
};

console.log(venda)
console.log(venda[id])
console.log(venda["id"])   // Não podemos acessar desse jeito

//Bigint é utilizado para mostrar numeros acima de: 2^53 - 1

let numeroGrande = 1234567890123456789012345678901234567890n;

console.log(numeroGrande); // Saída: 1234567890123456789012345678901234567890n






