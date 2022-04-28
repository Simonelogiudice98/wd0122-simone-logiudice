

let bottone = document.querySelector('#bottone')

bottone.addEventListener('click', function(){
    let tendina = document.querySelector('.tendina')
    console.log(tendina);
    tendina.classList.toggle('visibile')
    
})


// pulsanti


let titolo = document.getElementsByTagName('h1')[0]

let big = document.querySelector('.big')
big.addEventListener('click', function(){
    
titolo.style.fontSize = '80px'


})

let color = document.querySelector('.color')
color.addEventListener('click', function(){
    
titolo.style.color = 'red'
})

let bold = document.querySelector('.bold')

bold.addEventListener('click', function(){
    titolo.style.textTransform = 'uppercase'
    
})

let hide = document.querySelector('.hide')

hide.addEventListener('click', function(){
    titolo.style.visibility = 'hidden'
})

let show = document.querySelector('.show')

show.addEventListener('click', function(){
    titolo.style.visibility = 'visible'
})

// impegni



for(let i = 3; i <= 6 ; i++){
    impegno = document.getElementsByTagName('li')[i]
console.log(impegno);
impegno.addEventListener('click', function(){
    document.getElementsByTagName('li')[i].classList.toggle('fatto')
    
})
}