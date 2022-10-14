let valorDolar = (4.40).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
});
console.log(valorDolar);
// Resultado : $4.40


let valorReal = (4.40).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});
console.log(valorReal);
// Resultado: R$ 4,40