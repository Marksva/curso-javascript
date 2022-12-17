let tabela = [
    { equipe: 'Time Azul', pontos: 25 },
    { equipe: 'Time Verde', pontos: 47 },
    { equipe: 'Time Amarelo', pontos: 39 },
    { equipe: 'Time Vermelho', pontos: 16 },
];

function ordenaMaisPontos(a, b) {
    return b.pontos - a.pontos;
}

const equipeOrdenada = tabela.sort(ordenaMaisPontos);

const equipeSort = tabela.sort((b, a) => b + a)

console.table(equipeOrdenada)
console.table(equipeSort);