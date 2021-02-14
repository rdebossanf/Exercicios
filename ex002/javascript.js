var preco = new Array(100, 250, 1.99, 14.50);

function soma(compras){
    var tam = compras.length;
    var total = 0;

    for(var i= 0; i < tam; i ++){
        total+=compras[i];
    }
    return total;
}
console.log(preco.toLocaleString('pt-br',{style:'currency', currency:'BRL'}));
