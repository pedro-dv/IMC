
var button = document.querySelector('#button')

function IMC () {
    var nome = document.querySelector('#nome').value
    var peso = document.querySelector('#massa').value
    var altura = document.querySelector('#altura').value
    var res = document.querySelector('#res')

    if (nome !== "" && peso !== "" && altura !== "") {
        
        const valorIMC = peso / (altura **2).toFixed(1)

        let nivel = ""
        if (valorIMC < 18.5) {
            nivel = ' abaixo do peso'
        }else if (valorIMC < 25) {
            nivel = ' com o peso ideal. Parabens!!!'
        }else if (valorIMC < 30) {
            nivel = ' levemente acima do peso.'
        }else if (valorIMC < 35) {
            nivel = ' com obesidade GRAU I.'
        }else if (valorIMC < 40) {
            nivel = ' com obesidade GRAU II.'
        }else {
            nivel = ' com obesidade GRAU III. Cuidado!!!'
        }
           res.textContent = ` ${nome.toUpperCase()} , seu IMC é  ${valorIMC.toFixed(1)} e voce estar ${nivel} `
    
    }else {
        res.textContent = 'preencha o campo!'.toUpperCase()
    }
}

button.addEventListener("click", IMC) 

