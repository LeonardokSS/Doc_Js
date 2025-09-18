import fs from 'fs';


// Converter Objetos Js para Json

const pessoa = {nome:"maldoni", idade:33131, cpf:8888888888};

const json = JSON.stringify(pessoa);

console.log(json);


//Json em Objetos Js

const conver = JSON.parse(json)

console.log(conver)



//Como acessar json para mostrar no html
// O fetch é usado para realizar requisições HTTP, pegando dados de servidores ou de arquivos externos(JSON)

const arquivo = fs.readFileSync('eletronicos.json','utf-8');

const dado = JSON.parse(arquivo);

dado.categoria.produtos.forEach(produto =>{
    console.log(`nome: ${produto.nome}`)
})


const produtosCaros = dado.categoria.produtos.filter(produto => produto.preco > 2000);

console.log(produtosCaros)


const formatado = JSON.parse(produtosCaros)


