// Arrays são coleções de dados, não recomendados para armazenar objetos porque não existem métodos para manipular eles.

//Normalmente se armazeam nomes e algumas informações simples, podendo ser acessadas pelo numero da posição.


//Para criar a Array podemos:
let array1 = new Array();

let array2 = [
    "laranja",
    "banana",
    "maça",
    "kiwi"
            ];

//Para acessar os elementos podemos

console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]);

console.log(array2);
console.log(array2.length);


//Mudar elementos dentro da array

array2[2] = "maça verde";
console.log("Mudaça de elemento:");
console.log(array2[2]);

//Remover (pop,splice)

//Remove o último elemento
array2.pop();

console.log("Último elemento:");

console.log(array2);

//Remover elemento específico   esp = array2.splice(inicio,quantidade)
array2.splice(0,1);

console.log("Elemento específico:");

console.log(array2);

//Adicionar elementos (push)
let Numeros = [1,2,3,4,5];

Numeros.push(6,7,8);

console.log(Numeros);


console.log("looop")
let pares = [];
//    valor  limite  operação
for (let i = 2; i <= 10; i += 2) {
  pares.push(i);
}

console.log(pares)