const diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"];

// inserindo elemento no array 
diasDaSemana.push("sábado");


// removido utilizando a função nativa splice(indice, qtd elemento );
// diasDaSemana.splice(2,1);
// removendo "terça-feira"
// diasDaSemana.splice(1, 3);
// removendo "segunda-feira", "terça-feira", "quarta-feira"


// remover o primeiro elemento de um array shift();
// diasDaSemana.shift();
// removendo domingo

// remover o ultimo elemento pop();
// diasDaSemana.pop();
// removendo sabado 

diasDaSemana.map((dia) => { console.log(dia) })
