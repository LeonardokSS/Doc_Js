// Tratamento de erros com try funciona basicamente: 1 pega erro e mostra ele 2 trata ele


// O try tenta realizar o codigo, se der erro, o catch pega ele e recebe o valor e depois o finally vai realizar a ultima decisão
try {
  const nome = 13;
  console.log(nome.toUpperCase());
} catch (erro) {
  console.log("Ocorreu um erro: ", erro.message);
} finally {
  console.log("Fim do bloco try/catch.");
}
