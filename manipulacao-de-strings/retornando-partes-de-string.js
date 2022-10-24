// Em alguns casos pode ser necessário retornar apenas parte de uma string. Para isso o JavaScript fornece recursos nativos como podemos ver no flow a seguir.

// substr().
let frase = "Estou aprendendo JavaScript na DevMedia";
let resultado = frase.substr(17, 10);
console.log(resultado); // JavaScript

//substring()
let frase2 = "Eu sou programador JavaScript";
let resultado2 = frase2.substring(7, 18);
console.log(resultado2); // programador
"Estou aprendendo JavaScript na DevMedia"

// o metodo substr(posicao inicial da substring , quantidade de caractere)
// o metodo substring( posicao inicial da substring a ser extraida , posicao final da substring a ser extraida ); 

let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";

if (tamanho > 100) {
    resumo = conteudo.substr(0, 97); // subtraindo os primeiros 97 caracteres para formar o resumo. 
    resumo += "...";
} else {
    resumo = conteudo;
}

console.log(resumo); // Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência ...
