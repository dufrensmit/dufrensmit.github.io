function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
    //edite esta função!

    let regiaoFiscal = undefined

    let cpf_string = cpfInformado.toString()
    
    let digito_regiao = cpf_string[8]


    if (digito_regiao == "0"){
        regiaoFiscal = 9
    }
    else {
        regiaoFiscal = parseInt(digito_regiao) - 1
    }
        
    console.log(cpfInformado)
    
    //----------------------------
    return regiaoFiscal
}



function tratadorDeCliqueExercicio8() {
    let textCPF = document.getElementById("textCPF")
	let textRegiao = document.getElementById("regiaoFiscal")

    const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
    textRegiao.textContent = "Região fiscal: "+regiaoFiscal
}
