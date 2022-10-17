// vamos criar duas datas DataUltimoAcesso e dataAtual, dessa forma criaremos uma mensagem para o usuario. Bom dia, boa tarde, boa noite. 
// Em seguida iremos verificar quanto tempo o usuario ficou ausente. 

const DataUltimoAcesso = new Date('2022/10/15 17:00:00');
const dataAtual = new Date(); 

const hora = dataAtual.getHours();

let msg = ''
if ( hora < 6 || hora >= 18 ){
    msg = 'Boa noite \n';
} else if ( hora >=6 && hora < 12){
    msg = 'Bom dia \n';
} else { 
    msg = 'Boa tarde\n';
}

const timeUltimoAcesso = DataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso; // retorna a diferença em milissegundos. 

const milessegundosHora = 1000 * 60 * 60;  // quantidade de milissegudos que uma hora possui. 
const milessegundosDia = milessegundosHora * 24; // milessegundos que um dia possui. 


if ( diferencaTime > milessegundosDia){
    msg += 'Você está ausente há dias!!!';
} else if (diferencaTime > milessegundosHora ){
    msg += 'Você está ausente há horas!!!';
} else { 
    msg += 'Quem bom que ainda está aqui!';
}

console.log(msg)


