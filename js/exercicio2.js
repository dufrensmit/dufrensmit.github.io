function tratadorDeCliqueExercicio2() {
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s

    const agora = new Date();

    let hora = agora.getHours();
    const periodo = hora < 12 ? "AM" : "PM";
    hora = hora % 12 || 12;

    const minuto = agora.getMinutes();
    const segundo = agora.getSeconds();

    alert(`Horário: ${hora} ${periodo} : ${minuto}m : ${segundo}s`);

    console.log('adicionar código na função tratadorDeCliqueExercicio2() em ./js/exercicio2.js')
}