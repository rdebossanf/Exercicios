/* O usuário do exercício anterior decidiu acrescentar 3 livros a compra dele, os valores desses itens são [150.99, 90, 84.99]. Crie um for e use PUSH para acrescentar os itens no carrinho. Imprima o resultado na tela com console.log. */

// Usando o . PUSH
var preco = new Array(100, 250, 1.99, 14.50);
preco.push(150.99, 90, 84.99);

console.log(preco.toLocaleString('pt-br',{style:'currency', currency:'BRL'}));

// var array1 = [100, 250, 1.99, 14.50];
// var array2 = [150.99, 90, 84.99];

//console.log(array1.concat(array2));
// console.log([...array1, ...array2]);