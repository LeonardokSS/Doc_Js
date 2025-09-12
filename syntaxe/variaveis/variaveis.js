// Para declarar o valor das variaveis temos que primeiro declarar o nome e depois o seu valor

const exemplo = 22;

//Variaveis tipo let são atribuidas a valores que podem ser alterados

//Variaveis tipo const são de valores que não podem ser alteradas

const preco1 = 10;
const preco2 = 11;

let precofinal = preco1 + preco2;

//Para declararmos valores utilizamos o let
let nome = "Pedro Gustavo";



let resposta = "Sou uma variavel tipo string";

//Identificadores de variaveis, as variaveis podem ser identificadas por nomes únicos, chamados de identificadores, eles podem ser: x,y,z ou NomeCarro,Idade e etc.
// As regras são: 
// 1 Os nomes podem conter letras, digitos, sublinhados e cifrão
// 2 Os nomes tem que começar com uma letra, $ ou um sublinhado
// 3 Os nomes podem receber caracteres maiusculos e minusculos, tornando elas diferentes
// 4 Eles NÃO podem começar com palavras reservadas


// Variaveis podem receber nomes comecando com _
let _Nome = "Joao";
let _idade = 30;

//Variaveis podem receber nomes com $
let $Nome = "Joao";
let $Idade = 30;

//Podemos declarar varias variaveis em uma linha separadas por uma virgula

let Pessoa = "Guilherme", Cpf = 4666263, Telefone = 11999999, Idade = 30;

let _Pessoa = "Naldoni",
_Cpf = 1313113,
_Telefone = 311311311,
_Idade = 561;


// O simbolo de igual no JS serve para atribuição não para igualdade mas sim para atribuição, por isso:
//const x = x + 1;

//Para realizarmos a soma dentro de uma variavel temos que:
const soma = 1 + 2 + 3;

const palavra = "pala" + " " + "vra";

const u = "5" + 2 + 3;

console.log(u);

//Hoisting, diz que as declarações de variaveis e funções são levadas para o topo do escopo pelo JS
// Esse exemplos dariam indefinido
//console.log($exemplo)
//const $_exemplo = "exemplo"  = INDEFINIDO

//var A;
//console.log(A); = INDEFINIDO
//A = 10; = 

// console.log(ww); = INDEFINIDO
// let ww = 10 

//console.log (zz); = INDEFINIDO
// const zz = 10


// O hoisting consegue funcionar com Funções sem CONST, LET E VAR

digaOla();

function digaOla(){
    console.log("Olá")
};

//const Ola = digaOla();
//  function digaOla(){
//   console.log("ola")
//};



//Escopo é no contexto de onde se daclarou a variavel, onde ela pode ser acessada ou modificada

//Escopo global (Varivel declarada fora do bloco de codigo, podendo ser acessada de qualquer lugar)

let Global = "Eu sou global"

function mostrar (){
    console.log(Global)
}

mostrar();
console.log(Global)

//Escopo Local

function local(){
    const ss = 10
    console.log(ss)
}

local();
console.log(ss)











 














