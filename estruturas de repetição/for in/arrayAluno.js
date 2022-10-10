// A estrutura de repetição for..in permite que todas as propriedades de um objeto sejam percorridas.

let aluno = [{ nome: "Marcos", email: "marcos@email.com", idade: 25 }];

// propriedade e objeto
for (let dados in aluno) {
    console.log(aluno[dados]);
}

// Marcos
// marcos@email.com
// 25