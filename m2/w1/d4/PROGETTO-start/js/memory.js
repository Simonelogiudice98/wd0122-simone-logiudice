let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];
//libreria per icone
//https://html-css-js.com/html/character-codes/

var counter = 0

let arrayComparison = [];

document.body.onload = startGame();
// mi serviranno alcune variabili 

// 1. interval 
var interval ;

// 2. una agganciata alla classe find 
var iconsFind = document.querySelectorAll('.find');

// 3. una agganciata al'id modal 
  var modal = document.querySelector('#modal')

// 4. una agganciata alla classe timer
 var time = document.querySelector('.timer')


 //una funzione che serve a mescolare in modo random gli elementi dell'array che viene passato 
// (l'array contiene le icone degli animali)
function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}
// una funzione che rimuove la classe active e chiama la funzione startGame()
function rimuoviClasse(){
    let attivo = document.querySelector('.active')
    attivo.classList.remove('active')
    startGame()
}
// la funzione startGame 

function startGame(){
    
    counter = 0
    // dichiara un array vuoto, 
    let arrEmpty =[]
   
    // mescola casualmente l'array degli animali
    // (var arrayShuffle = shuffle(arrayAnimali);),
    var arrShuffle = shuffle(arrayAnimali)
    
    // aggancia il contenitore con id griglia, 
    let griglia = document.querySelector('#griglia')
    
    griglia.innerHTML = ''
    // poi fa ciclo per creare i 24 div child -> aggiunge la class e l'elemento dell'array in base all'indice progressivo
    
    for(let x of arrShuffle){


        let contenitore = document.createElement('div')
        let div = document.createElement('div')
        div.classList.add('icon')
        div.innerHTML = x
        contenitore.appendChild(div)
        griglia.appendChild(contenitore)
    }
    let icone = document.querySelectorAll('.icon')
    for(let icona of icone){
        icona.addEventListener('click',displayIcon)
    }
}
//che pulisce il timer, 

// pulisce tutti gli elementi che eventualmente contiene


// chiama la funzione timer e associa a tutti gli elementi (div) di classe icon l'evento click e le due funzioni definit sotto



function displayIcon() {
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    counter += 1

    /*
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    è uguale a 
    var icons = document.getElementsByClassName("icon");
    //var icons = [...icon];
    è un operatore che serve per passare un array come argomento:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
    https://www.tutorialspoint.com/es6/es6_operators.htm (cerca spread nella pagina)
    */

    

    //mette/toglie la classe show
    this.classList.toggle("show");
    if(document.getElementsByClassName('show').length == 24){
        finePartita()
    }

    //aggiunge l'oggetto su cui ha cliccato all'array del confronto
    arrayComparison.push(this);
    if(!this.classList.contains("show")){
        arrayComparison = []
    }

    var len = arrayComparison.length;
    //se nel confronto ci sono due elementi
    if (len === 2) {
        //se sono uguali aggiunge la classe find
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
        } else {
            //altrimenti (ha sbagliato) aggiunge solo la classe disabled
            icons.forEach(function(item) {
                item.classList.add('disabled');
            });
            // con il timeout rimuove  la classe show per nasconderli
            setTimeout(function() {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}



//una funzione che viene mostrata alla fine quando sono tutte le risposte esatte

function finePartita(){
    clearInterval(timer)
    modal.classList.add('active')
    let tempoTrascorso = document.querySelector('#tempoTrascorso')
    tempoTrascorso.innerHTML = m + ':' + s + '<br>' + counter + ' mosse'
}

// una funzione che nasconde la modale alla fine e riavvia il gioco


// una funzione che calcola il tempo e aggiorna il contenitore sotto
let m = 0;
let s = 0;
var timer

let bottone = document.querySelector('#button')
bottone.addEventListener('click',function(){
    
    let icone = document.querySelectorAll('.icon')
    for(let icona of icone){
        icona.style.pointerEvents = 'all'
    }

    bottone.value = 'Ricomincia'

    if(timer){
        clearInterval(timer)
        m = 0
        s = 0
        time.innerHTML = 'Tempo:'+ ' ' + m +' '+ 'min ' + s + ' sec'
    }

    
    timer = setInterval(function() {
        if (s < 60) {
            s++;
        } else {
            s = 0;
            m++
        }
        // console.log(m);
        // console.log(s);
        time.innerHTML = 'Tempo:'+ ' ' + m +' '+ 'min ' + s + ' sec'
    }, 1000)
})

function playAgain(){
    modal.classList.remove('active')
    startGame()
}