
let data = new Date();
// console.log(data)

let giorno = data.getDate()

let mese = data.getMonth()


let anno = data.getFullYear()

console.log(anno)

const calendario = document.querySelector('#calendario')

function currentDate(){
    calendario.innerHTML = giorno + "/" + (mese+1) + "/" + anno
}
currentDate()





let orologio = document.querySelector('#orologio')




function currentHour(){
    let orario = new Date()
    
    let ora = orario.getHours()
    
    let minuti = orario.getMinutes()
    
    let secondi = orario.getSeconds()

    orologio.innerHTML = ora + ':' + minuti + ':' + secondi
}

currentHour()

setInterval(currentHour, 1000);

// function f(){
//     orologio.innerHTML = currentHour()
// }

let mesi = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile', 
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre'
]

mesi[data.getMonth()]

console.log(mesi)

document.write('<br> giorno:' + data.getDate() + '<br>')
document.write('<br> mese:' + mesi[data.getMonth()] + '<br>')
document.write('<br> anno:' + data.getFullYear() + '<br>')