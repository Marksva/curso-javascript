// UTC é o tempo universal que serve de base para os fusos horários.
// Através do UTC conseguimos manipular uma data independente do fuso horário.
// Através do Timestamp conseguimos verificar a diferença entre uma data e outra.

const hoje = new Date();

// imprimindo string com a data armazenada. 
console.log( hoje.toString() );

// imprimindo uma string com a data universal (UTC) 
console.log( hoje.toUTCString() );

// Imprimindo uma string com a data e a hora local
console.log( hoje.toLocaleString() );

// Imprimindo timestamp
console.log( hoje.valueOf() );



