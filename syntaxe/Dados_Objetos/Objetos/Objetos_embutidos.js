//Os objetos embutidos são metodos embutidos no javascript, eles serve para facilitar o trabalho


//NUMBER, trabalhar com numeros e converções
console.log(Number("123"));//converte para number

console.log(Number.isInteger(1.5)); //verifica se o numero é inteiro

console.log(Number.MAX_VALUE); //maior numero que o js suporta

//Math

console.log(Math.PI);              // 3.141592653589793

console.log(Math.round(4.7));      // 5 (arredonda)

console.log(Math.random());        // número aleatório entre 0 e 1

console.log(Math.max(5, 10, 2));   // 10 (maior valor)

//Date

let hoje = new Date();

console.log(hoje);

console.log(hoje.getFullYear); // retorna o ano

console.log(hoje.getDay); // dia da semana (0-6)

//String

let string = "Eu estou codando"

console.log(string.length) // mostra o tamanho da string

console.log(string.toUpperCase) // deixa tudo maisculo

console.log(string.includes("Eu")) // verifica se "Eu" esta contido na string

//Error


try{
    throw new Error("Algo deu errado!");
} catch (e){
    console.log(e.message) // algo deu errado
}



//Boolean 

console.log(Boolean(0));           // false

console.log(Boolean("texto"));     // true

console.log(new Boolean(false));   // objeto Boolean false (não igual ao primitivo)



