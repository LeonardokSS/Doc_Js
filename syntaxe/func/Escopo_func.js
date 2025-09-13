// Quando você declara variáveis dentro de uma função, elas so podem ser acessadas dentro dela mesma.
// Se as variáveis forem declaradas fora da função elas podem ser acessadas




let fora = "estou fora";

function exemplo(){

 let dentro = "estou dentro";

 console.log(dentro);

 console.log(fora);

}

//console.log(dentro) Ira dar erro
exemplo();