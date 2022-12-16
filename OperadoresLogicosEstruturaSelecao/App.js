const { stdin } = require('process');

const readLine = require ('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Este programa vai chevar se voce é maior de 18 anos e tem habilitação para saber se voce pode entrar no kart')
console.log('Alem da suas verificações, vamos validar se você esta na lista de presença de horario');

readLine.question('Qual seu ano de nascimento?', ano => {
    if ( ano > 2004 ) {
        console.log('Voce não tem 18 anos');
    }else {
        readLine.question("Voce tem carteira de Habilitação? (Sim/Não)", temhabilitacao => {
            if(!(temhabilitacao.toUpperCase() === "SIM")){
                console.log('Voce não tem habilitação para entrar no kart');
            }else{
                readLine.question("qual o seu nome?", nome =>{
                    switch(nome){
                        case 'douglas':
                            console.log('Bem vindo ao kart Douglas');
                            break;
                        case 'Aroldo':
                            console.log('Bem vindo ao kart Aroldo');
                            break;
                            default:
                            console.log('Seu nome não foi identificado na lista de presença');

                    }
                });
        }
        })
    } 
} )


