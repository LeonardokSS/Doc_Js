// As estruturas chaveadas armazenam dados relacionando chaves a eles, ou seja para modificar elas precisamos usar as suas chaves em vez da posição
// Elas se dividem em duas categorias: Map e Set
// O Map é uma coleção de chave e valor, que podem armazenar todos os tipos de dados


// Cria um map
let map = new Map();


//Define valores
map.set('nome', "joão");

map.set( 2, 30);

map.set('resenha', true);

console.log(map)

//Acessar valores, APENAS PELA CHAVE (esquerda)

console.log(map.get('resenha'));

console.log(map.get('nome'));

//Verificar o tamanho do Map

console.log("O tamanho do map é:",map.size);    

//Verificar existencia de uma CHAVE, apenas

console.log(map.has("nome"));

console.log(map.has("idade"));

//Removendo um valor

map.delete(2);

//Removendo todos os valores

map.clear();

//Interando valores

map.forEach((valor)=>{
    console.log(valor)
});