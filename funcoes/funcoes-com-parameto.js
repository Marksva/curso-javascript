// exemplo simples de funcao com parametro 

function status_aluno(nota_1, nota_2) {

    let media = (nota_1 + nota_2) / 2;
    
    let status = ''
    
    if (media >= 6) {
        status = 'Aprovado';
    } else {
        status = 'Reprovado';
    }

    return status; 

}


let aluno_1 = status_aluno(7, 8);
console.log(`Aluno 1: ${aluno_1}`);


let aluno_2 = status_aluno(4, 3);
console.log(`Aluno 2: ${aluno_2}`);