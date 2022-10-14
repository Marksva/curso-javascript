let email_acesso = "mark.mark@email.com";
let email_cadastro = "Mark.Mark@email.com";

// Quando os dados tiverem sensibilidade à diferença entre caracteres maiúsculos e minúsculos será necessário usar os métodos nativos para resolver esse problema. 
if (email_acesso.toLowerCase() == email_cadastro.toLowerCase()) {
    console.log("Foi enviado um link de ativação para o seu email");
} else {
    console.log("Esse email não existe em nossa base de dados")
}

// apesar das variaveis terem valores iguais, são consideradas diferentes no JavaScript; 
let programador_x = "Flávia";
let programador_y = "flávia";

if (programador_x == programador_y) {
    console.log("Iguais");
} else {
    console.log("Diferentes");
}
// diferentes
