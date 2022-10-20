// A funcao reduce serve para reduzir um array a um unico valor. esse valor reduzido pode ser um numero, uma string, um array ou um objeto 

const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 3, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
];

function somarValor(total, itemCarrinho) {
    const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;

    return total + valorTotal;
}

const valorAPagar = itensCarrinho.reduce(somarValor, 0);

console.log(valorAPagar);



// ------------------------------------------ //

const jogos = [
    { id: 1, nome: 'Galaxian', anoLancamento: 1979 },
    { id: 2, nome: 'Donkey Kong', anoLancamento: 1981 },
    { id: 3, nome: 'Ms. Pac-man', anoLancamento: 1981 },
    { id: 4, nome: 'Asteroids', anoLancamento: 1979 },
];


function retornaNomesJogos(nomes, jogo) {
    return nomes + jogo.nome + ', ';
}

const nomesJogos = jogos.reduce(retornaNomesJogos, '');

console.log(nomesJogos)
