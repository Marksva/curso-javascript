// Na programação é comum “quebrar” strings em partes menores e usar essas substrings para algum fim.
// O método split() é muito útil para extrair dados de strings maiores. Assim é importante saber como é a composição da string para identificar o caractere que será usado como separador

// split(" caracter usado para separar a string ") 

let paises_string = "Brasil Espanha Canadá Irlanda Suíça";
let paises_array = paises_string.split(" "); // a cada espaco em branco ele cria um novo elemento. 
console.log(paises_array); // (5) ["Brasil", "Espanha", "Canadá", "Irlanda", "Suíça"]


let cores_string = "Vermelho, Azul, Branco, Cinza, Amarelo, Roxo";
let cores_array = cores_string.split(",");
console.log(cores_array); //(6) ['Vermelho', ' Azul', ' Branco', ' Cinza', ' Amarelo', ' Roxo']



let nome_completo = "Ana Mendes da Silva";
let array = nome_completo.split(" ");
let nome = array[0];
console.log("Olá " + nome + ", seja bem vindo(a)"); // Olá Ana, seja bem vindo(a)
