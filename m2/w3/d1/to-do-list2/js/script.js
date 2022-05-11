

// let utente = {
//     nome: n ,
//     cognome: c,
//     eta: d 

// }

let bottone = document.querySelector('bottone')


function aggiungi(){

    let n = document.querySelector('#nome').value
    let c = document.querySelector('#cognome').value
    let d = document.querySelector('#nascita').value

    let utente = new Utente(n,c,d)
    
    let row = document.createElement('div')
    row.classList.add('row')

    let colNome = document.createElement('div')
    colNome.classList.add('col')
    
    let colEta = document.createElement('div')
    colEta.classList.add('col')

    colNome.innerText = user.getFullName()
    colEta.innerText = this.getEta()

    row.append(colNome, colEta)
    document.querySelector('#table').append(row);
}


class Utente {
    constructor(n,c,d){
        this.nome = n
        this.cognome = c
        this.data = new Date(d)
    }

    getFullName(){
        return this.nome + ' ' + this.cognome
    }

    getEta(){
        let oggi = new Date()
        oggi = oggi.getFullYear()
        return oggi - this.data
    }
}

// let utente = new Utente('marco','rossi',d)

