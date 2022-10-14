let cep_acesso = "   29880-500  ";
let cep_cadastro = "29880-500";
// Apesar dos valores serem iguais são considerados diferentes.
// Geralmente o método trim() é usado no cadastro e na validação de dados
// Uso do método trim() tira os espaçoes em branco na comparação de strings. 

if (cep_acesso.trim() == cep_cadastro.trim()) {
    console.log("Os ceps são iguais");
} else {
    console.log("Os ceps são diferentes");
}


