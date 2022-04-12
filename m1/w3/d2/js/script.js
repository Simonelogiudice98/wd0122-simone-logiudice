let numero = 4
const numero2 = 6
console.log(numero , numero2)

function somma(){
    
    document.write(numero + numero2)
}
    somma()
console.log(somma)

// numero2 += 2
console.log(numero2)

var a = Number(prompt('inserire numero a'));
var b = Number(prompt('inserire numero b'));
var c = a + b ;

function sommaVar(){

    document.write('<br>' , a + b)
    return(a + b)
}

sommaVar()

console.log(sommaVar)

 // booleano //

//  var bool = true
//  if(bool){
//      document.write('la variabile è vera')
//  }else{
//      document.write('la variabile è falsa')
//  }

// if(sommaVar() > 20){
//     bool = true
// }else{
//     bool = false
// }

var bool = sommaVar() > 20
 document.write('<br>' + 'la somma è maggiore di 20?:' + ' ' + bool)

//  concatenare stringhe //

var pizza = 'margherita :';
var ingrediente1 = 'pomodoro'
var ingrediente2 = 'mozzarella'
var pizza_preferita = pizza + ingrediente1 + ingrediente2 ;
console.log(pizza_preferita)

document.write('<br>' + pizza + ' ' + ingrediente1 + ' ' + ingrediente2)


// quadrati //

function cambiaSfondo(e){

    let color = e.getAttribute('data-colore')
    console.log(color);

 if(e.style.backgroundColor == ''){
    
    e.style.backgroundColor = color
 }else{
     e.style.backgroundColor = '';
 }
   
}


