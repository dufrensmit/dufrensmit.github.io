function verificaIntervalo(num) {

    if ((num < 30) || (num > 100) || ((num > 50) && (num < 60))) {
        console.log("O número não está em nenhum dos intervalos")
    }
    else if (num <= 50){
        console.log(num + " está no intervalo [30,50]")
    }
    else {
        console.log(num + " está no intervalo [60, 100]")
    }

}

function pegaNumerosPraVerificarIntervalo() {
    
    let primeiro_numero = window.prompt("Insira o primeio número:");
    verificaIntervalo(primeiro_numero)

    let segundo_numero = window.prompt("Insira o segundo número:");
    verificaIntervalo(segundo_numero)

}