// const itensOpcionais = [
//     { nome: 'Pré som', valor: 800 },
//     { nome: 'Conta-giros', valor: 500 },
//     { nome: 'Desembaçador traseiro', valor: 1000 },
//     { nome: 'Ar quente', valor: 1800 },
// ];
// const valorTotal = itensOpcionais.reduce((total, item) => {
//     return total + item.valor; 
// }, 0)
// console.log('R$ ' + valorTotal.toFixed(2));






// const jogos = [
//     { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
//     { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
//     { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
//     { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
//     { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
//     { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
// ];

// const totalPS4 = jogos.reduce((total, jogo) => {
//     const valorSomar = jogo.plataforma == 'PS4' ? 1 : 0
//     return total + valorSomar;
// }, 0);

// console.log(totalPS4);







// const itensOpcionais = [
//     { nome: 'Pré som', valor: 800 },
//     { nome: 'Conta-giros', valor: 500 },
//     { nome: 'Desembaçador traseiro', valor: 1000 },
//     { nome: 'Ar quente', valor: 1800 },
// ];

// itensOpcionais.forEach((item) => {
//     console.log(item.nome+' - '+item.valor)
// })
// itensOpcionais.map((item)=>{
//     console.log(item.nome+' - '+item.valor)
// })





// const jogos = [
//     { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
//     { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
//     { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
//     { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
//     { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
//     { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
// ];

// function imprimirJogo(jogo) {
//     console.log(jogo.nome + ' - ' + jogo.anoLancamento);
// }

// function retornaJogosFliperama(jogo) {
//     return jogo.plataforma == 'Fliperama' && jogo;
// };

// const jogosFliperama = jogos.filter(retornaJogosFliperama);

// jogosFliperama.forEach(imprimirJogo);






// const chuvaDeMeteoros = [
//     { nome: 'Alfa Centaurídeos',	    declinacao:	-59 },
//     { nome: 'Gama Normídeos',	        declinacao:	-50 },
//     { nome: 'Pi Pupídeos',	          declinacao:	-45 },
//     { nome: 'Líridas',	              declinacao:	34  },
//     { nome: 'Eta Aquáridas',	        declinacao:	-1  },
//     { nome: 'Eta Líridas',	          declinacao:	44  },
//     { nome: 'Bootídeos de Junho',	    declinacao:	48  },
//     { nome: 'Alfa Capricornídeos',    declinacao:	-10 },
//     { nome: 'Delta Aquáridas do Sul', declinacao:	-16 },
//     { nome: 'Piscis Austrinídeos',	  declinacao:	-30 },
//     { nome: 'Perseidas',	            declinacao:	58  },
//   ];

//   function imprimirChuva(chuva) {
//     const hemisferio = ( chuva.declinacao >= 0 )?'Norte':'Sul';
//     console.log( 'Chuva: ' + chuva.nome + ' Hemisfério :' + hemisferio );
//   }

//   chuvaDeMeteoros.forEach(imprimirChuva);












