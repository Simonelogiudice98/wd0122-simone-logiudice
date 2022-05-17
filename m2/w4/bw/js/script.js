let tbody = document.querySelector('#utenti')
let thead = document.querySelector('#thead')

fetch("http://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(res =>{

    for(let utente of res){


        let tr = document.createElement('tr')

        let tdId = document.createElement('td')
        tdId.innerHTML = utente.id

        let tdNome = document.createElement('td')
        tdNome.innerHTML = utente.name

        let tdUsername = document.createElement('td')
        tdUsername.innerHTML = utente.username

        let tdEmail = document.createElement('td')
        tdEmail.innerHTML = utente.email 


        let vedi = document.createElement('button')
        vedi.classList.add('btn','bg-info')
        vedi.innerHTML = 'View'

        let modifica = document.createElement('button')
        modifica.classList.add('btn','bg-warning','my-2')
        modifica.innerHTML = 'Edit'
        modifica.addEventListener('click', function(){
            fetch("http://jsonplaceholder.typicode.com/users/", {
            method: 'PATCH',
            body: JSON.stringify(utente),
            headers: { 'Content-type': 'Application/json'}
         }).then(function(response){
            console.log(response);
            })
        })

        let elimina = document.createElement('button')
        elimina.classList.add('btn','bg-danger','text-white',)
        elimina.innerHTML = 'Delete'
        elimina.addEventListener('click',function(){
            fetch('http://jsonplaceholder.typicode.com/users/'+'/'+ utente.id, {
            method: 'DELETE',
            })
            .then(res =>{
                console.log(res);
                if(res.status == 200 || res.status == 201){
                    window.alert('Utente eliminato con successo!')
                }
            })
        
        })

        let rowButton = document.createElement('div')
        rowButton.classList.add('row')

        rowButton.append(vedi,modifica,elimina)

        tr.append(tdId,tdNome,tdUsername,tdEmail,rowButton)

        tbody.append(tr)

        console.log(utente);
    }
    
})



let divForm = document.querySelector('.aggiungiUtente')
let aggiungi = document.querySelector('#aggiungi')
aggiungi.addEventListener('click', function(){

    divForm.classList.toggle('visibile')
})


let nome = document.querySelector('#name')
let userName = document.querySelector('#userName')
let mail = document.querySelector('#mail')
let invia = document.querySelector('#invia')

invia.addEventListener('click', function(e){
    e.preventDefault()
    let user = {
        name:  nome.value,
        username: userName.value,
        email: mail.value,
    }
    fetch("http://jsonplaceholder.typicode.com/users/", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-type': 'Application/json'}
    })
    
    .then(res =>{
        console.log(res);
        if(res.status == 200 || res.status == 201){
            window.alert('Utente aggiunto con successo!')
        }
    })

})




// .then(res => res.text()) 
// .then(res => console.log(res))
