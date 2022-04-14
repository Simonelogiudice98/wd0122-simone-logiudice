let citta = ['Roma','Torino', 'Milano', 'Firenze']
 console.log(citta)
 citta.sort()

 
 citta.push('Napoli')
 console.log(citta)

 citta.splice(4,1)
 console.log(citta)

let cittaStr = 'Genova,Palermo,Brindisi,Venezia'

console.log(cittaStr)


let citta2 = cittaStr.split(',')
console.log(citta2)
console.log(citta2[2])

let insieme =  citta.concat(citta2)
console.log(insieme)

console.log(insieme.join())
console.log(insieme.length)


var numeri = [1999,1998,2000,2001,2002]
const anno = 2022
function calcolaAnni(n){
    
    return anno - n
}
calcolaAnni(numeri[0])
console.log(calcolaAnni(numeri[0]))


console.log(calcolaAnni(numeri[1]))

console.log(calcolaAnni(numeri[2]))

console.log(calcolaAnni(numeri[3]))

console.log(calcolaAnni(numeri[4]))

numeri.pop()
console.log(numeri)
