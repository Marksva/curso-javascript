// // exemplo simples de arrow function que verifica a media do aluno para ser aprovado ou reprovado. 
const retorna_media = (n1, n2) => {

    let media = (n1 + n2) / 2;
    let status = ''

    if (media >= 6) {
        status = 'Aprovado';
    } else {
        status = 'Reprovado';
    }

    return status;
}

let media_aluno1 = retorna_media(4,3);
console.log(media_aluno1)




// arrow function apenas com uma linha que retorna a media 

const retorno_media = (n1, n2) => (n1 + n2) / 2; 

let media_aluno2 = retorno_media(9, 8);
console.log(`A média do aluno é: ${media_aluno2}`);
