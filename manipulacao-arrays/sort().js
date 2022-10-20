// A funcao sort() ordena o conteudo de um array e retorna esse mesmo array ordenado. 
/* Forma padrao de criar funcao para ordenar arrays numericos!
function ordenaNumeros(a, b){
    return a - b;
    // a - b = crescente 
    // b - a = decrescente
}
*/

let alunos = [
    { nome: 'Juliana', matricula: 132 },
    { nome: 'Mark', matricula: 245 },
    { nome: 'Marina', matricula: 58 },
    { nome: 'Augusto', matricula: 359 },
];

//Forma padrão de ordenação crescente.
function ordenaMatricula(a, b) {
    return a.matricula - b.matricula; 
}

console.log('Array antes da ordenação:');
console.table(alunos);

alunos.sort(ordenaMatricula);

console.log('Array depois da ordenação:');
console.table(alunos);

// ----------------------------------------------- // 

// const frutas = ["Manga", "Laranja","Tangerina","Banana"];

// console.log("\nArray antes da ordenação:\n");
// console.info(frutas);

// frutas.sort();

// console.log("\nArray depois da ordenação:\n");
// console.info(frutas);
// console.log("\n");

// ----------------------------------------------- // 

const numeros = [10, 1, 2];

console.log("\nArray antes da ordenação:\n");
console.info(numeros);

// forma padrao de criar funcao para ordenar arrays numericos!
function ordenaNumeros(a, b) {
    return a - b;
    // a - b = crescente 
    // b - a = decrescente
}

numeros.sort(ordenaNumeros);

console.log("\nArray depois da ordenação:\n");
console.info(numeros);
console.log("\n");