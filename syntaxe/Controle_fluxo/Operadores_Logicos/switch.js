// Switch serve para basicamente tomar uma decisão a partir de um valor de uma variável

const fruta = "laranja"

switch(fruta){
    case "laranja":
        console.log("O Preço é 10 R$")
    break;
    
    case "melancia":
    case "melanica":
        console.log("O preço é 1200 R$")
    break;
}