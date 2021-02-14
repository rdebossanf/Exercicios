/*1-Um usuário fazendo compras num site colocou vários produtos no carrinho. Os preços desses produtos estão no array seguinte: [100, 250, 1.99, 14.50]. Crie uma função que calcule o total do valor do carrinho de compras. Imprima o resultado na tela com console.log.
*/

 //function opção 1
/*
function soma(n1,n2,n3,n4) {
    var resultado = n1+n2+n3+n4;
    document.write(resultado);
}
soma(100, 250, 1.99, 14.50);
*/


//function opção 2
/*
function soma2 (n1,n2,n3,n4) {
    return n1+n2+n3+n4;
}
document.write(soma2(100, 250, 1.99, 14.50));
*/


//function opção 3 com arrays

var preco = new Array(100, 250, 1.99, 14.50);

function soma(compras) {
    var tam = compras.length;
    var total = 0;

    for(var i = 0; i < tam; i ++){
        total+=compras[i];
    }
    return total;
}
console.log(soma(preco));