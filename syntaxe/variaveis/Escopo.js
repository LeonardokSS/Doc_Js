
//Escopo é no contexto de onde se daclarou a variavel, onde ela pode ser acessada ou modificada
// O escopo de bloco é o alcance de variaveis dentro de um codigo {tudo que esta dentro disso}
// Entao tudo que esta entre chaves nao pode ser acessado de fora 

{
 let x = 10;
 console.log(x)
}

//console.log(x)  Vai dar erro 


function objeto() {
 let nome = "Ana";
 return {nome}; /// retorna o nome como um objeto nao em string
}

let pessoa = objeto();
console.log(pessoa.nome)


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
//console.log(ss) isso ira dar erro porque nao esta sendo declarado fora do escopo


