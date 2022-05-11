
class Persona {
    constructor(nome,eta){
        this.name = nome;
        this.age = eta;
    }
    confrontaEta(obj2){
        if(this.age > obj2.age){
            console.log(this.name + " è più vecchio di " + obj2.name)
        }
        else if(this.age < obj2.age){
            console.log(this.name + ' è più giovane di ' + obj2.name);
        }
        else if(this.age == obj2.age){
            console.log(this.name + ' e ' + obj2.name + ' hanno la stessa età');
        }
    }
}

let p1 = new Persona('Mario',22)
let p2 = new Persona('Pippo',17)
let p3 = new Persona('Gianni',30)

p1.confrontaEta(p2)


class Utente{
    constructor(nome,cognome,eta){
        this.nome = nome
        this.cognome = cognome
        this.eta = eta
    }
}

class Pagination{
    constructor(items = [],pageSize = 10){
        this.contenuti = items
        this.dimensioni = pageSize
        

    }
}

const users = [
 {nome:'Marco', cognome:'Bianco' ,  id: 1},
 {nome:'Mario', cognome:'Bianco2' , id: 2},
 {nome:'Luigi', cognome:'Bianco3' , id: 3},
 {nome:'Giovanna',cognome:'Bianco4',id: 4},
 {nome:'Laura', cognome:'Bianco5' , id: 5},
 {nome:'Carlo', cognome:'Bianco6' , id: 6},
 {nome:'Mirko', cognome:'Bianco7' , id: 7},
 {nome:'Gianni',cognome: 'Bianco8' ,id: 8},
 {nome:'Piero', cognome:'Bianco9' , id: 9},
 {nome:'Pippo', cognome:'Bianco10',id: 10}
]

let p = new Pagination(users,2)




// let u1 = new Utente('Marco', 'Bianco' ,  18)
// let u2 = new Utente('Mario', 'Bianco2' , 20)
// let u3 = new Utente('Luigi', 'Bianco3' , 30)
// let u4 = new Utente('Giovanna','Bianco4',20)
// let u5 = new Utente('Laura', 'Bianco5' , 30)
// let u6 = new Utente('Carlo', 'Bianco6' , 33)
// let u7 = new Utente('Mirko', 'Bianco7' , 40)
// let u8 = new Utente('Gianni', 'Bianco8' ,30)
// let u9 = new Utente('Piero', 'Bianco9' , 70)
// let u10 = new Utente('Pippo', 'Bianco10',30)