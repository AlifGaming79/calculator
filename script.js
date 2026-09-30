const output = document.getElementById('calculator-output')
const number = document.querySelectorAll('.number')

function calculate() {

    let numberOutput 

    number.forEach((button) => {
        button.addEventListener('click', () => {
            numberOutput = button.textContent
            output.innerHTML = numberOutput
        })
    })

}
calculate()