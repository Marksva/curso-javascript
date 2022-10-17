const data_atual = new Date();


// retorna o ano. 
console.log(`Ano: ${data_atual.getFullYear()}`);

// retorna o mês de (0 a 11)
console.log(`Mês: ${data_atual.getMonth()}`); // poderia somar +1 para retornar o mês correto. 

// retorna o dia do mês 
console.log(`Dia: ${data_atual.getDate()}`); 

// retorna a hora (0 a 23)
console.log(`Hora: ${data_atual.getHours()}`);

// retorna os minutos (0 a 59)
console.log(`Minutos: ${data_atual.getMinutes()}`);

// retorna os segundos (0 a 59)
console.log(`Segundos: ${data_atual.getSeconds()}`);

// retorna os milisegundos (0 a 999)
console.log(`Milisegundos: ${data_atual.getMilliseconds()}`);

// retorna o dia da semana (0 a 6)
console.log(`Dia da semana: ${data_atual.getDay()}`); // poderia somar +1 para retorna o dia correto

// retorna o timestamp da data. 
console.log(`Timestamp: ${data_atual.getTime()}`);

// retorna em minutos a diferença de fuso horario. Para saber a diferença de fuso horário do sistema para o UTC utilizamos o método .getTimezoneOffset()
console.log(`Diferença de fuso: ${data_atual.getTimezoneOffset()}`);

// retorna o valor primitivo do objeto.
console.log(`Valor primitivo: ${data_atual.valueOf()}`);







// 0 => Janeiro
// 1 => Fevereiro
// 2 => Março
// 3 => Abril
// 4 => Maio
// 5 => Junho
// 6 => Julho
// 7 => Agosto
// 8 => Setembro
// 9 => Outubro
// 10 => Novembro
// 11 => Dezembro

// 0 => Domingo
// 1 => Segunda-feira
// 2 => Terça-feira
// 3 => Quarta-feira
// 4 => Quinta-feira
// 5 => Sexta-feira
// 6 => Sábado


