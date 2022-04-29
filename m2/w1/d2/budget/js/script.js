

    
function inizia(){

    let budget = 1000;
    let acquisti = 0;

    while (budget > 0){
        let transazione = Math.floor(Math.random()*100);

        if(transazione <= budget){
            acquisti += 1;
            budget -= transazione

             document.querySelector('#totale').innerHTML += '<p> la tua spesa è ' + transazione + ' il tuo badget rimanente ammonta a ' + budget + '</p><br>' 

        }
    
        if(budget <= 500 && budget + transazione >= 500  ){
            // document.querySelector('#totale').innerHTML += '<p> la tua spesa è ' + transazione + ' il tuo badget rimanente ammonta a ' + budget + '</p><br>';
            document.querySelector('#totale').innerHTML += '<h1>Hai raggiunto la metà del budget</h1>' 
        }

        if(budget == 0){
            document.querySelector('#totale').innerHTML += '<h2> Credito esaurito </h2>'
            document.querySelector('#totale').innerHTML += '<h2> Hai effettuato ' +acquisti+ ' acquisti</h2>'
            
            
        }

    }

}






