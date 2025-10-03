// O trow serve basicamente para situações onde você sabe que pode resultar em erro

function dividir(a,b){
    if(b == 0)
        throw new Error("Não é possivel realizar divisão por 0!")
    else if (a == 0)
        throw new Error("Não é possivel dividir 0 por algo!")
    else
        return a/b;
}

try{
    console.log(dividir(1,"0"))
}
catch (erro){
    console.log("Ocorreu o erro:", erro.message)
}