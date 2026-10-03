const output = document.getElementById('calculator-output')
const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')

let numberOutput 
let operatorOutput

    operator.forEach((button) => {
        button.addEventListener('click', () => {
            operatorOutput = button.textContent
        })
    })

    number.forEach((button) => {
        button.addEventListener('click', () => {
            numberOutput = button.textContent
            output.innerHTML = numberOutput
        })
    })

function calculate() {
    
}
calculate()