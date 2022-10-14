//O método replace() é a melhor forma de substituir um termo dentro de um texto na linguagem JavaScript.

let texto = "A linguagem PHP é muito poderosa";
let resultado = texto.replace("PHP", "JavaScript");
console.log(resultado);
// A linguagem JavaScript é muito poderosa


let texto2 = "Gabriel adora JavaScript! Ele faz exercícios de JavaScript todos os dias para aprender mais.";
let resultado2 = texto2.replace("JavaScript", "JS");
console.log(resultado2);
// Gabriel adora JS! Ele faz exercícios de JavaScript todos os dias para aprender mais.


let texto3 = "O Rio de Janeiro é uma das cidades mais bonitas do mundo! Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer. Quem vive nessa cidade é muito privilegiado!";
let resultado3 = texto3.replace("Rio de Janeiro", "RJ");
console.log(resultado3);
//O RJ é uma das cidades mais bonitas do mundo! Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer. Quem vive nessa cidade é muito privilegiado!