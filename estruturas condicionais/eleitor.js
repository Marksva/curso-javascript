idade = 22;

if(idade < 16 ){
    console.log('Não eleitor');
} else if(idade === 16 || idade === 17 || idade >= 65){
    console.log('Eleitor facultativo ');
} else {
    console.log('Eleitor obrigatório');
}