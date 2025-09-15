// Funções são blocos de codigos reutilizáveis, que possuem parametros, que são variáveis que servem para receber valores de fora da função
// Nome é um parametro da função mostrarNome e recebe valor de Leo
function mostrarNome(nome){
    console.log(`Seu nome é ${nome}!`);
};

mostrarNome("Leo");


// Podemos definir o valor dos parametros dentro da função

function Nome(nome = "visitante"){
    console.log(`Olá, ${nome}`);
};

Nome();

// Podemos tambem fazer com que os parametros sejam declarados, não dependendo do numero de variaveis
function somarTudo(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}

console.log(somarTudo(1, 2, 3, 4)); 