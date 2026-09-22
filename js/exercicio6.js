function inverterString() {
    const texto = window.prompt("Digite uma string:");
    const invertida = texto.split("").reverse().join("");

    console.log(invertida)
}