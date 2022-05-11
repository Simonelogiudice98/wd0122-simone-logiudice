let nome = document.querySelector('#nome')
let data = document.querySelector('#data')
let bottone = document.querySelector('#bottone')
let nomeC = document.querySelector('#generalita')
let age = document.querySelector('#age')

bottone.addEventListener('click', function(){
    let div1 = document.createElement('div')
    div1.innerHTML = nome.value

    let div2 = document.createElement('div')
    div2.innerHTML = data.value

    div1.classList.add('border','border-dark')
    div2.classList.add('border','border-dark')


    nomeC.append(div1)
    age.append(div2)

    nome.value = ''
    data.value = ''
})