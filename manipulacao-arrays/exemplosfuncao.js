/* ---------------------------------------------------- */
// const carrinho = [
//     { nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
//     { nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
//     { nome: 'New Super Mario Bros.', qnt: 1, valor: 250 }
// ];

// carrinho.forEach((produto, index) => {
//     let texto = index + 1 + ' - ';
//     texto += produto.qnt + ' UN - ';
//     texto += produto.nome + ' - ';
//     texto += 'R$ ' + produto.valor + ' - ';
//     texto += 'R$ ' + produto.qnt * produto.valor;

//     console.log(texto);
// })

/* ---------------------------------------------------- */

// const meses = [
//     "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
// ];
// const abreviar = (mes) => mes.substr(0, 3);
// const mesesAbreviados = meses.map(abreviar);
// console.log(mesesAbreviados);

/* ---------------------------------------------------- */

const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

const carrosFiat = carros.filter((carro) => carro.marca === 'Fiat');
console.table(carrosFiat);