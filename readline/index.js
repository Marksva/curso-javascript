//estudo de entrada de dados
import entradaDados from 'readline-sync';


// conversor de Celsius para kelvin
// let C = entradaDados.question('Informe o valor em Celsius: ');
// let K = Number(C) + 273.15;
// console.log(`${C}°C equivale a ${K}K`);


//Conversos de milhas para quilometros
// let mi = entradaDados.question("informe o valor em Milhas: ");
// let km = mi / 0.62137;
// console.log(`${mi}mi equivale a ${km}km`);


// let nome = entradaDados.question('Digite seu nome: ');
// console.log(`Os nomes foram: ${nome}`);

// Soma de dois numeros
// obs: a string so deve ser convertida para calculos de soma
console.log('Calculadora de soma entre x e y: \n');
let x = entradaDados.question('Valor de x: ');
let y = entradaDados.question('Valor de y: ');
let soma = Number(x) + Number(y);
console.log(`${x} + ${y} = ${soma}`)

