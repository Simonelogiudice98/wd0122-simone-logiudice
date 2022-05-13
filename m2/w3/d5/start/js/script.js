
let body = document.querySelector('#container')



fetch('json/users.json')
.then(res => res.json())
.then(res => {

    console.log(res);
    for(let utente of res){

        let row = document.createElement('div')
        row.classList.add('row','d-flex')

        let nome = document.createElement('div')
        nome.classList.add('col-2','border-bottom','border-dark','fs-5','pt-5','mb-2')
        nome.innerHTML = utente.firstName

        let cognome = document.createElement('div')
        cognome.classList.add('col-2','border-bottom','border-dark','fs-5','pt-5','mb-2')
        cognome.innerHTML = utente.lastName

        let genere = document.createElement('div')
        genere.classList.add('col-2','border-bottom','border-dark','fs-5','pt-5','mb-2')
        genere.innerHTML = utente.gender
        
        let mail  = document.createElement('div')
        mail.classList.add('col-2','border-bottom','border-dark','fs-5','pt-5','mb-2')
        mail.innerHTML = utente.email 
        
        let foto = document.createElement('div')
        foto.classList.add('col-4','border-bottom','border-dark','text-center','pb-1','mb-2')
        foto.innerHTML = `<img src=" ${utente.profileURL} ">`
        
        
        row.append(nome,cognome,genere,mail,foto)
        
        body.append(row)
    }
})

console.log(body);