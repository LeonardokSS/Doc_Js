// Para controlarmos a continuidade dos loops podemos adicionar um break, que decide ou não se o loop vai continuar


// Neste exemplo o i seria somado até o infinito, porém agora ele para por causa da condição if que utiliza o break, parando o loop em 25
let i = 20


while (i > 10){
  if (i === 25){
   break;

  }
  i += 1
}

console.log(i)





//Continue, utilizado para poder eliminar uma repetição de um loop sem fazer com que para completamente a sua operação, podemos ver que o resultado neste caso vai pular a posição 2 do valor i, porém não ira quebrar o loop. 
console.log("Continue")


for(let i = 0; i < 5; i++){
 if( i === 2) continue;
 console.log(i)
}