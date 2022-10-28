import entradaDados from 'readline-sync';

const iniciar = () => {

    console.log('---------------------------------------------');
    console.log('-----------------Bem Vindo-------------------');

    do {
        let escolha = entradaDados.question('Digite uma altura para o muro de 1 a 8: ');

    } while (escolha < 1 || escolha > 8);

    criaMuroNivel3(escolha);
}

const criaMuroNivel1 = (altura) => {

    let muro = '#';

    for (let i = 1; i <= altura; i++) {
        console.log(muro.repeat(i));
       
    }

}

const criaMuroNivel2 = (altura) => {
    let muro = '#';
    let pontos = '.';
    let indexMuro = 7

    for (let i = 1; i <= altura; i++) {
        console.log(`${pontos.repeat(indexMuro)}${muro.repeat(i)}`);
        indexMuro--;
    }

}

const criaMuroNivel3 = (altura) => {

    let muro = '#';
    let pontos = '.';
    let indexMuro = 7

    for (let i = 1; i <= altura; i++) {
        console.log(`${pontos.repeat(indexMuro)}${muro.repeat(i)} ${muro.repeat(i)}${pontos.repeat(indexMuro)}`);
        indexMuro--;
    }


}

export default iniciar; 