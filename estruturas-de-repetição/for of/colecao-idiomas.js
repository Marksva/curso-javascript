let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];



for (let curso of cursos_idiomas) {

    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let carga_horaria = curso.carga_horaria;

    let preco_hora_curso = preco_curso / carga_horaria;

    console.log(`Nome do curso: ${nome_curso}`);
    console.log(`Carga horaria do curso: ${carga_horaria}`);
    console.log(`Preço do curso: R$${preco_curso}`);

    let resultado = (preco_hora_curso >= 15) ? 'Hora/aula superior ou igual a R$15,00' : 'Hora/aula inferior a R$15,00'; 

    console.log(resultado);
    console.log('\n');
}