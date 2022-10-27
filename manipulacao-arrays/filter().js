// A funcao filter() é utilizada para filtrar os elementos de um array e criar um novo array com apenas os elementos que atendem uma condição. por exemplo: 
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

function retornarCarroFiat(carro) {
    return (carro.marca == 'Fiat');
}

const carrosFiat = carros.filter(retornarCarroFiat);

carrosFiat.forEach(e =>{
  console.log(e.modelo)
})

/*
* vai imprimir:
[
  { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
  { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 }
]
*/