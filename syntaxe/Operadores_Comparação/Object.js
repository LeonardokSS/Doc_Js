//Para realizar a verificação entre 2 dados diferentes, temos que usar o método estático chamdo Object.is()
//Ele basicamente realiza uma comparação de tipo entre 2 valores e retorna True ou False



const x = "Nome"

const y = "nome"

// Detecta a difereça entre uso de letras MAIÚSCULAS e minúsculas
console.log(Object.is(x,y))

const placa = "Xtas-3321"

const placa2 = "Xtas-3322"


console.log(Object.is(placa,placa2))




