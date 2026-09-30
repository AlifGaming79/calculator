const output = document.getElementById('calculator-output')

function calculate() {
    const angkaPertama = parseInt(prompt('masukkan angka pertama: '))
    const angkaKedua = parseInt(prompt('masukkan angka kedua: '))
    
    const perhitungan = angkaPertama + angkaKedua
    const hasilPerhitungan = perhitungan

    output.innerHTML = hasilPerhitungan

}