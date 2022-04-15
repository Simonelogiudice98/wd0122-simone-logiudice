function isOperazione(o){
    return  (o == '/'|| o == '+' || o == '-' || o == '*')
    
}




function scegliNumero(bottone){
    let numero = bottone.innerHTML
    
        let display = document.querySelector('#display')
    
        
        if(numero == 'x'){
            numero = '*'
            
        }
        if(numero == ':'){
            numero = '/'
        }
        if(isOperazione(numero)){
            
            let eq = display.value
            let indice = eq.length-1
            let ultimoCarattere = eq.charAt(indice)
            if(isOperazione(ultimoCarattere)){return}
        }
        
        
        
        
        
        
        display.value += numero
    }


    function notifica(){
        
        let audio2 = new Audio('assets/audio/notification.mp4')
        audio2.play()
    }




function risultato(){
    let display = document.querySelector('#display')

    let totale = eval(display.value)

    display.value = totale

 let audio = new Audio('assets/audio/gameover.mp4')
 audio.play()


}
 function del(){
    let display = document.querySelector('#display')

    display.value = ''
 }

 
// nightmode
    
    let nightMode = document.querySelector('.night')
    let tabella = document.querySelector('#tabella')
    
    nightMode.addEventListener('click', function(e){
        
        tabella.classList.toggle('nightmode')

        // display.classList.toggle('nightmode')
        // bottoni.classList.toggle('nightmode')
        
    })
    
    
    // bottoni.addEventListener('click',function(e){

    // })

   
    
    