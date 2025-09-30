//O exemplo mais básico de loop em JS seria o do FOR, com inicialização, condição e incremento.
//  criar varivel  valor_max     incremento
console.log("LOOP usando FOR:")
// repetir com variavel
for(let i = 0;       i < 5;       i ++){
    console.log(i);
};





//While, executa enquanto uma condição for verdeira
console.log("Loop usando while:")

i = 0

while(i < 5){
    console.log(i);
    i++;
}   



//Nesse loop temos que o resultado vai depender da condição do while, tudo que esta no bloco do do sera executado pelo menos 1 vez

console.log("LOOP  do e while")
let resultado = "";

let numero = 5;


do{
    numero += 1;
    resultado += numero;
} while( numero < 6 );

console.log(resultado)