// O set é uma coleção de valores únicos, ou seja não possuem um id para relacionar os valores
// Diferente dos arrays, onde pode aparecer valores repetidos. O set garante que não há dados duplicados


// Criar um set
let set = new Set();


//Adicionar elemtentos
set.add('joao');

set.add('pedro');

set.add('beterraba');

set.add('soneca');

set.add('joao'); // não vai ser adicionado

console.log(set.size);

// Mostra como um set
console.log(set);

// Mostra elemento por elemento
set.forEach((valor)=>{
    console.log(valor)
});


//deletar itens

set.delete('joao');

//existencia 

console.log(set.has('joao'));

