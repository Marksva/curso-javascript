// Getters de conversão são metodos do date que retornam uma string com a data diferente dos metodos getters que retornam numbers. 
const dataAtual = new Date();

// vai imprimir a data String 
console.log(dataAtual.toDateString());


// vai imprimir a hora String
console.log(dataAtual.toTimeString());


// vai imprimir data e hora em String 
console.log(dataAtual.toString());


// vai imprimir uma string com um formato Universal (ISO 8601) 
// O horario retornado será sempre com o fuso horario 0 
console.log('ISO 8601: ' + dataAtual.toISOString());


// vai imprimir uma string apenas com data e o tempo
console.log(dataAtual.toLocaleString())

const optionsbr = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
    month: 'numeric',
    year: 'numeric',
    day: 'numeric'
};
console.log(dataAtual.toLocaleString('pt-BR', optionsbr))


const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
// vai imprimir uma string com apenas a data. 
console.log(dataAtual.toLocaleDateString());
console.log(dataAtual.toLocaleDateString('es', options))


const options2 = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
}
// vai imprimir uma string com apenas o tempo. 
console.log(dataAtual.toLocaleTimeString());
console.log(dataAtual.toLocaleTimeString('en-US', options2));


