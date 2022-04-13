const anno = 2022;

function calcoloAnni(a){
    // var a = Number(prompt('tua eta'))
    
   return  (anno - a)
}
// document.write(calcoloAnni(2000))
// document.write(calcoloAnni(1990))

function maggiorenne(){
   var x = prompt('inserisci il tuo anno di nascita')
   var eta = calcoloAnni(x)
  if(eta >=18){
      return 'si sei maggiorenne'
  }else{
      return 'sei minorenne'
  }
}
console.log(maggiorenne())



