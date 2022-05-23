var numero1 = document.querySelector('#numero1');
var numero2 = document.querySelector('#numero2');
var esito = document.querySelector('#esito');
var risultato = document.querySelector('#risultato');
function randomNum() {
    var numero = Math.ceil(Math.random() * 100);
    return numero;
}
var inizia = document.querySelector('#inizia');
inizia.addEventListener('click', function (e) {
    e.preventDefault();
    var num1 = numero1.value;
    var num2 = numero2.value;
    var x = randomNum();
    if (num2 == '' || num1 == '') {
        window.alert('inserisci un numero');
        return;
    }
    if (num1 < 1 || num1 > 100) {
        window.alert('inserisci un numero valido');
        return;
    }
    if (num2 < 1 || num2 > 100) {
        window.alert('inserisci un numero valido');
        return;
    }
    if (risultato != null) {
        risultato.innerHTML = x;
    }
    confronto(x, num1, num2);
});
function confronto(numero, num1, num2) {
    // if(num2 && num1 == numero){
    //     esito.innerHTML = 'avete vinto entrambi'
    // }    
    if (num1 == numero) {
        esito.innerHTML = 'Il giocatore 1 ha indovinato';
    }
    if (num2 == numero) {
        esito.innerHTML = 'Il giocatore 2 ha indovinato';
    }
    if (numero < num1) {
        var ris1 = num1 - numero;
    }
    if (numero < num2) {
        var ris2 = num2 - numero;
    }
    if (numero > num1) {
        var ris1 = numero - num1;
    }
    if (numero > num2) {
        var ris2 = numero - num2;
    }
    if (ris1 < ris2) {
        esito.innerHTML = 'ha vinto il giocatore 1';
    }
    else {
        esito.innerHTML = 'ha vinto il giocatore 2';
    }
    if (ris1 == ris2) {
        esito.innerHTML = 'avete vinto entrambi';
    }
}
