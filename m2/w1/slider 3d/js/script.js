
let cubi = document.querySelector('.cubi')
console.log(cubi);

let avanti = document.querySelector('.avanti')
console.log(avanti);
let indietro = document.querySelector('.indietro')
console.log(indietro);

let partenza = 0

avanti.addEventListener('click', next)
indietro.addEventListener('click', back)


function next(){
 partenza -= 90;
 cubi.style.transform = 'rotateY(' + partenza + 'deg)'
}
function back(){
 partenza += 90;
 cubi.style.transform = 'rotateY(' + partenza + 'deg)'
}

