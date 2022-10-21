import entradaDados from 'readline-sync';

const Soma = (x, y) => {

    return Number(x) + Number(y);
}

const Subtracao = (x, y) => {
    return Number(x) - Number(y);
}

const Menu = () => {
    
    let continuar = '';
    do {

        console.log('[+] - Somar');
        console.log('[-] - Subtrair');

        let escolha = entradaDados.question('Digite o operador que deseja: ');

        switch (escolha) {
            case '+':
                let n1 = entradaDados.question('Digite um numero: ');
                let n2 = entradaDados.question('Digite um numero: ');
                console.log(`[${n1} + ${n2} = ${Soma(n1, n2)}]\n`);
                break;

            case '-':
                let num1 = entradaDados.question('Digite um número: ');
                let num2 = entradaDados.question('Digite um número: ');
                console.log(`[${num1} + ${num2} = ${Subtracao(num1, num2)}]\n`);
                break;
            default:
                console.log('[erro] Ops operador não identificado!');
        }

        continuar = entradaDados.question('Digite [s] para continuar ou qualquer tecla para sair.');


    } while (continuar == 's' || continuar == 'S')
}

export default Menu;