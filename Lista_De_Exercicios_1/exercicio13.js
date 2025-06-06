// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')();

let totalNumeros = 0;
let contador = 0;
while (true) {
  let numero = parseFloat(prompt('Digite um número (0 para SAIR): '));
  if (numero === 0) break;
  totalNumeros += numero;
  contador++;
}
if (contador > 0) {
  console.log('\nX=======================================X');
  console.log('Quantidade de números digitados:', contador);
  console.log('Soma dos números:', totalNumeros.toFixed(2));
  console.log('Média:', (totalNumeros / contador).toFixed(2));
  console.log('X=======================================X\n');
} else {
  console.log('Nenhuma número válido foi digitado!');
}
