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


const arquivo = fs.readFileSync('eletronicos.json', 'utf-8');

const data = JSON.parse(arquivo);

data.categoria.produtos.forEach(produto =>{
    console.log(`nome: ${produto.nome} preco: ${produto.preco}`);
});



