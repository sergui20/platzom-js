var translation = prompt("Ingrese una palabra");

function platzom(str) {
	debugger;
	let translation = str

	let reverse = str => str.split("").reverse().join("")

	function minMay(str){
		debugger;
		translation = ""
		capitalize = true

		for(let i = 0; i < str.length; i++){
			debugger;
			let caracter = str.charAt(i)
			translation += capitalize ? caracter.toUpperCase() : caracter.toLowerCase()
			capitalize = !capitalize
		}

		return str
	}

	//Si la palabra es un palindromo, me la devuelve normal
	if (str == reverse(str)) {
		debugger;
		return minMay(str)
	}

	//Si la palabra termina en "ar" se le quita esas letras
	if (str.toLowerCase().endsWith("ar")) {
		debugger;
		translation = str.slice(0,-2)
	}

	//Si la palabra inicia con "z" se le agrega pe al final
	if (str.toLowerCase().startsWith("z")) {
		debugger;
		translation += "pe"
	}

	//Si tiene 10 o mas letras, la dividimos por la mitad y la separamos por un guion
	if (translation.length >=10) {
		debugger;
		let firstHalf = str.slice(0, Math.round(str.length / 2))
		let secondHalf = str.slice(Math.round(str.length / 2))
		translation = firstHalf + "-" + secondHalf	
	}

	return translation
}

let result = platzom(translation)
document.write(result)