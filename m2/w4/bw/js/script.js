
let tbody = document.querySelector('#utenti')
let thead = document.querySelector('#thead')
let inputId = document.querySelector('#inputId')
let nome1 = document.querySelector('#name1')
let userName1 = document.querySelector('#userName1')
let email1 = document.querySelector('#mail1')
let invia1 = document.querySelector('#invia1')
let nomeV = document.querySelector('#nomeV')
let indirizzo = document.querySelector('#indirizzo')
let azienda = document.querySelector('#azienda')
let telefono = document.querySelector('#telefono')



        // invia1.addEventListener('click',function(e){
        //     e.preventDefault()
            

        //     fetch("http://jsonplaceholder.typicode.com/users" + "/" + inputId.value, {
        //     method: 'PATCH',
        //     body: JSON.stringify({
        //         name : nome1.value,
        //         username : userName1.value,
        //         email : email1.value
        //     }),
        //     headers: { 'Content-type': 'Application/json'}
        //  }).then(function(response){
        //     console.log(response);
        //     })

        // })

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
        let vediUtente = document.querySelector('.vediUtente')

        vedi.addEventListener('click',function(){

            vediUtente.classList.toggle('visibile')
            nomeV.innerHTML = utente.name
            document.getElementById("azienda").innerHTML = JSON.stringify(utente.company.name);
            document.getElementById("indirizzo").innerHTML = JSON.stringify(utente.address.street +' '+ utente.address.suite + ' ' + utente.address.city);
            telefono.innerHTML = utente.phone

        })

        let modifica = document.createElement('button')
        modifica.classList.add('btn','bg-warning','my-2')
        modifica.setAttribute('data-bs-toggle','modal')
        modifica.setAttribute('data-bs-target','#exampleModal2')
        console.log(modifica.getAttribute('data-bs-toggle'));
        modifica.innerHTML = 'Edit'
        let modificaUtente = document.querySelector('.modificaUtente')
        
        modifica.addEventListener('click',function(){
            
            // modificaUtente.classList.toggle('visibile')
            
            nome1.value = utente.name
            userName1.value = utente.username
            email1.value = utente.email
            inputId.value = utente.id
            
        })


        let elimina = document.createElement('button')
        elimina.classList.add('btn','bg-danger','text-white',)
        elimina.innerHTML = 'Delete'

        elimina.addEventListener('click',function(){
            let counts = setInterval(updated,20);
            let upto = 0
            let width = 0
            function updated(){
                const count = document.getElementById('counter')
                const hr = document.getElementById('hr')
                ++upto;
                count.innerHTML = 'LOADING ' + upto + '%';
                hr.style.width = upto +'%'
                if(upto === 100){
                    clearInterval(counts);
                    count.innerHTML = 'DONE';
                }}
            fetch("http://jsonplaceholder.typicode.com/users"+'/'+ utente.id,{
                method: 'DELETE'
            })
            setTimeout(function() {Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })},2000)
        })



        let rowButton = document.createElement('div')
        rowButton.classList.add('row')

        rowButton.append(vedi,modifica,elimina)

        tr.append(tdId,tdNome,tdUsername,tdEmail,rowButton)

        tbody.append(tr)

    }
})
// let toggleUtente = document.querySelector('.aggiungiUtente')
// let aggiungi = document.querySelector('#aggiungi');
// aggiungi.addEventListener('click',function(){

//     toggleUtente.classList.toggle('visibile')

// })
var divCounter = document.querySelector('.div-counter')
let nome = document.querySelector('#name')
let userName = document.querySelector('#userName')
let email = document.querySelector('#mail')
let invia = document.querySelector('#invia')

invia.addEventListener('click',function(e){
    e.preventDefault()

    let counts = setInterval(updated,20);
    let upto = 0
    let width = 0
    function updated(){
        const count = document.getElementById('counter')
        const hr = document.getElementById('hr')
        ++upto;
        count.innerHTML = 'LOADING ' + upto + '%';
        hr.style.width = upto +'%'
        if(upto === 100){
            clearInterval(counts);
            count.innerHTML = 'DONE';
            
        }
        divCounter.append(counter,hr)
    }
    let users = {
        name: nome.value,
        username: userName.value,
        email: mail.value,
    }
    fetch("http://jsonplaceholder.typicode.com/users/", {
        method: 'POST',
        body: JSON.stringify(users),
        headers: { 'Content-type': 'Application/json'}
    })
    .then(res =>{
        console.log(res);
        if(res.status == 200 || res.status == 201){
            setTimeout(function() {Swal.fire({
                title: 'successo!',
                text: 'Utente aggiunto',
                icon: 'success',
                confirmButtonText: 'ok'
              })},2000)
        }
    })
})
