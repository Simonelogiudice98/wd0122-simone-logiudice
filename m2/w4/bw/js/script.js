let tbody = document.querySelector('#utenti')
let thead = document.querySelector('#thead')

// modifica
let inputId = document.querySelector('#inputId')
let nome1 = document.querySelector('#name1')
let userName1 = document.querySelector('#userName1')
let email1 = document.querySelector('#mail1')
let invia1 = document.querySelector('#invia1')

// view
let nomeV = document.querySelector('#nomeV')
let indirizzo = document.querySelector('#indirizzo')
let azienda = document.querySelector('#azienda')
let telefono = document.querySelector('#telefono')

// barra di ricerca

let ricerca = document.querySelector('#ricerca')

let btnRicerca = document.querySelector('#btnRicerca')

btnRicerca.addEventListener('click',function(e){
    e.preventDefault()
    let testo = ricerca.value
    let testoMin = testo.toLowerCase()
    let righe = document.querySelectorAll('tbody tr')

    for(r of righe){
        let trovato = false
        let tutto = r.querySelectorAll('.tutto')
        for(let t of tutto){
            let x = t.innerHTML.toLowerCase()
            
            if(x.includes(testoMin)){
                trovato = true 
            }
            
        }
        if(trovato){
            r.classList.remove('displayUser')
        }else{
            r.classList.add('displayUser')
        }
    }
    
    let i = 0
    let tutto = document.querySelectorAll('.tutto')
    

    

})


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
        vedi.classList.add('btn','bg-info','col-12','mt-2','text-light')
        vedi.setAttribute('data-bs-toggle','modal')
        vedi.setAttribute('data-bs-target','#modal3')
        vedi.innerHTML = 'View'
        


      vedi.addEventListener('click',function(){

          nomeV.innerHTML = utente.name
          document.getElementById("azienda").innerHTML = JSON.stringify(utente.company.name);
          document.getElementById("indirizzo").innerHTML = JSON.stringify(utente.address.street +' '+ utente.address.suite + ' ' + utente.address.city);
          telefono.innerHTML = utente.phone
      })

        


        

        let modifica = document.createElement('button')
        modifica.classList.add('btn','bg-warning','my-2','col-12')
        modifica.setAttribute('data-bs-toggle','modal')
        modifica.setAttribute('data-bs-target','#exampleModal2')
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
        elimina.classList.add('btn','bg-danger','text-white','col-12','mb-2')
        elimina.innerHTML = 'Delete'

        elimina.addEventListener('click',function(){
            
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success mx-2 p-4',
                  cancelButton: 'btn btn-danger mx-2 p-4'
                },
                buttonsStyling: false
              })
              swalWithBootstrapButtons.fire({
                title: 'Sei sicuro?',
                text: "Non potrai tornare indietro!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si!',
                cancelButtonText: 'No!',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                    //fetch.then(if(res.ok  ))
                    fetch("http://jsonplaceholder.typicode.com/users"+'/'+ utente.id,{
                    method: 'DELETE'
                    })
                    .then(res =>{
                    console.log(res);
                    if(res.ok){

                        swalWithBootstrapButtons.fire(
                        'Cancellato!',
                        'il file è stato rimosso.',
                        'success'
                      )
                    }
                    else{
                        swalWithBootstrapButtons.fire(
                            'errore!',
                            'non è stato possibile proseguire.',
                            'error'
                          )
                    }
                      

                })

                
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    'Annullato',
                    'Il tuo fil è salvo',
                    'error'
                  )
                }
              })
             
            
        })


        let td = document.createElement('td')

        td.append(vedi,modifica,elimina)

        tdNome.classList.add('tutto')
        tdUsername.classList.add('tutto')
        tdId.classList.add('tutto')
        tdEmail.classList.add('tutto')

        tr.append(tdId,tdNome,tdUsername,tdEmail,td)

        tbody.append(tr)

    }
})

var divCounter = document.querySelector('.div-counter')
var divCounter2 = document.querySelector('.div-counter2')
let nome = document.querySelector('#name')
let userName = document.querySelector('#userName')
let email = document.querySelector('#mail')
let invia = document.querySelector('#invia')

// TASTO INVIA 

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


// TASTO MODIFICA
let cambia = document.querySelector('#modifica')

cambia.addEventListener('click',function(e){
    e.preventDefault()
    let counts = setInterval(updated,20);
    let upto = 0
    let width = 0
    function updated(){
        const count2 = document.getElementById('counter2')
        let hr2 = document.getElementById('hr2')
        ++upto;
        count2.innerHTML = 'LOADING ' + upto + '%';
        hr2.style.width = upto +'%'
        if(upto === 100){
            clearInterval(counts);
            count2.innerHTML = 'DONE';
            
        }
        divCounter2.append(counter2,hr2)
    }
    
    
    fetch("http://jsonplaceholder.typicode.com/users" + "/" + inputId.value, {
        method: 'PATCH',
        body: JSON.stringify({
            name : nome1.value,
            username : userName1.value,
            email : email1.value
        }),
        headers: { 'Content-type': 'Application/json'}
     }).then(function(res){
        console.log(res);
        if(res.status == 200 || res.status == 201){
            setTimeout(function() {Swal.fire({
                title: 'successo!',
                text: 'Utente modificato',
                icon: 'success',
                confirmButtonText: 'ok'
            })},2000)
        }
    })
})