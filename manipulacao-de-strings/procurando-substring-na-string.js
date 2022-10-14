// Procurar uma substring dentro de uma string é uma tarefa comum na rotina do desenvolvedor.
// o metodo encontra a substring 
// indexOf();

let frase = "O Brasil é um país maravilhoso!!";
let resultado = frase.indexOf("Brasil");
// se não houver a substring o metodo ira retornar -1. 
console.log(resultado);
// 2


let expressao_proibida = "passaporte falso";
let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if (comentario.indexOf(expressao_proibida) > -1) {
    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");
} else {
    console.log("Seu comentário foi aprovado");
}
console.log(comentario); // venda de passaporte falso
