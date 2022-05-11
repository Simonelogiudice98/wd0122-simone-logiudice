let interfaccia = document.querySelector('#interfaccia')
let user = document.querySelector('#user')
let add = document.querySelector('#add')
let del = document.querySelector('#del')
let s = 0

window.onload = function() {
    if(localStorage.getItem('nome') != undefined){
        interfaccia.innerHTML = 'ciao ' + localStorage.getItem('nome')
    }
    if(sessionStorage.getItem('tempo') != undefined){
        s = sessionStorage.getItem('tempo')
       
    }
}

add.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.setItem("nome",user.value)

    let nome = localStorage.getItem("nome")
    interfaccia.innerHTML = 'ciao ' + nome
    
})

del.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.removeItem("nome",user.value)

    interfaccia.innerHTML = ''
})

var timer = document.querySelector('#timer')

setInterval(function(){
     
    s++
    sessionStorage.setItem("tempo",s)
    timer.innerHTML = 'sei in sessione da '+ sessionStorage.getItem("tempo")+' secondi'


},1000);


