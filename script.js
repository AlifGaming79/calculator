const output = document.getElementById('calculator-output')
const del = document.getElementById('del')
const c = document.getElementById('c')
const equal = document.getElementById('equal')
const point =  document.getElementById('point')
const persen = document.querySelector('persen')
const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')

let firstNumber = null
let operatorOutput = null
let value = ""

output.innerHTML = 0

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