function convertCelciusToFahrenheit(celcius) {
	//edite esta função
	//note que você já está recebendo o valor em celcius como parâmetro desta função

	let temp_farenheit = (celcius * 1.8) + 32
	return temp_farenheit
}





// -- Não edite abaixo!

function conversaoCtoF() {
	let textCelcius = document.getElementById("celciusText")
	let textFahrenheit = document.getElementById("resultFahrenheit")
	textFahrenheit.textContent = convertCelciusToFahrenheit(textCelcius.value) + 
								 "ºF"
}