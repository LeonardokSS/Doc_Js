//O exemplo mais básico de loop em JS seria o do FOR, com inicialização, condição e incremento.
//  criar varivel  valor_max     incremento
console.log("LOOP usando FOR:")
//  variavel         limite       ação
for(let i = 0;       i < 5;       i ++){
    console.log(i);
};



//While, executa enquanto uma condição for verdeira 
console.log("Loop usando while:")

i = 0

while(i < 5){
    console.log(i);
    i += 1;
}   



//Nesse loop temos que o resultado vai depender da condição do while, tudo que esta no bloco do do sera executado pelo menos 1 vez
console.log("LOOP do e while")

let resultadostring = "";
let resultadonum = 0
let numero = 0;
///
do{
    numero += 1;
    resultadostring += numero;
    resultadonum += numero;

} while( numero < 6 );
///
console.log(resultadostring)

console.log(resultadonum)




//loop for of, serve para realizar um loop com base em objetos interados em um array, por exemplo

// for(elemento na array){
//    condição}

console.log("Loop para cada elemento da array")

const lista = ["beterraba","maca","calendario"]
///
for(const element of lista){
    console.log(element);
}
///



//Loop for propety mostra as propiedades dos objetos dentro de uma array
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
