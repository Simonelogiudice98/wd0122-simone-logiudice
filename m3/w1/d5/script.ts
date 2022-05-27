interface ISmartphone{
     carica:number
     numeroChiamate:number
    
    ricarica(unaRicarica:number):void

    chiamata(minutiDurata:number):void
    
    numero404():number
    
    getNumeroChiamate():number

    azzeraChiamate():void

}

class Utente implements ISmartphone{

    
    carica:number = 0;
    numeroChiamate:number = 0;
    spesaChiamate:number = 0; 

    constructor(carica:number){
        this.carica = carica;
    }

    
    public ricarica(unaRicarica:number):void{
         this.carica += unaRicarica

    }
    public chiamata(minutiDurata:number ):void{
        let costoChiamata = (minutiDurata * 0.20)
       if((this.carica - costoChiamata) <= 0){
          
          throw new Error('credito insufficente') 
        
       }else{

           this.numeroChiamate ++
           this.spesaChiamate += costoChiamata
           this.carica -= costoChiamata;
       }
      
       
        
        
    }
    public numero404():number{
        return this.carica
    }
    public getNumeroChiamate():number{
        return this.numeroChiamate
    }
    public azzeraChiamate():void{
         this.numeroChiamate = 0;
    }
}
class Utente2 implements ISmartphone{

    
    carica:number = 0;
    numeroChiamate:number = 0;
    spesaChiamate:number = 0; 

    constructor(carica:number){
        this.carica = carica;
    }

    
    public ricarica(unaRicarica:number):void{
         this.carica += unaRicarica

    }
    public chiamata(minutiDurata:number ):void{
        let costoChiamata = (minutiDurata * 0.20)
       if((this.carica - costoChiamata) <= 0){
          
          throw new Error('credito insufficente') 
        
       }else{

           this.numeroChiamate ++
           this.spesaChiamate += costoChiamata
           this.carica -= costoChiamata;
       }
      
       
        
        
    }
    public numero404():number{
        return this.carica
    }
    public getNumeroChiamate():number{
        return this.numeroChiamate
    }
    public azzeraChiamate():void{
         this.numeroChiamate = 0;
    }
}
class Utente3 implements ISmartphone{

    
    carica:number = 0;
    numeroChiamate:number = 0;
    spesaChiamate:number = 0; 

    constructor(carica:number){
        this.carica = carica;
    }

    
    public ricarica(unaRicarica:number):void{
         this.carica += unaRicarica

    }
    public chiamata(minutiDurata:number ):void{
        let costoChiamata = (minutiDurata * 0.20)
       if((this.carica - costoChiamata) <= 0){
          
          throw new Error('credito insufficente') 
        
       }else{

           this.numeroChiamate ++
           this.spesaChiamate += costoChiamata
           this.carica -= costoChiamata;
       }
      
       
        
        
    }
    public numero404():number{
        return this.carica
    }
    public getNumeroChiamate():number{
        return this.numeroChiamate
    }
    public azzeraChiamate():void{
         this.numeroChiamate = 0;
    }
}


class UtenteErrore implements ISmartphone{

    
    carica:number = 0;
    numeroChiamate:number = 0;
    spesaChiamate:number = 0; 

    constructor(carica:number){
        this.carica = carica;
    }

    
    public ricarica(unaRicarica:number):void{
         this.carica += unaRicarica

    }
    public chiamata(minutiDurata:number ):void{
        let costoChiamata = (minutiDurata * 0.20)
       if((this.carica - costoChiamata) <= 0){
          
          throw new Error('credito insufficente') 
        
       }else{

           this.numeroChiamate ++
           this.spesaChiamate += costoChiamata
           this.carica -= costoChiamata;
       }
      
       
        
        
    }
    public numero404():number{
        return this.carica
    }
    public getNumeroChiamate():number{
        return this.numeroChiamate
    }
    public azzeraChiamate():void{
         this.numeroChiamate = 0;
    }
}

let firstUser = new Utente(5)
console.log(firstUser);
firstUser.ricarica(10)
console.log('La tua ricarica è stata effettuata');
console.log('Il tuo credito residuo è di '+ firstUser.numero404() + '€');
console.log('Chiamata in corso...');
firstUser.chiamata(5);
console.log('Chiamata terminata, hai speso '+ firstUser.spesaChiamate + ' €' );
console.log('Il tuo credito residuo è di '+ firstUser.numero404() + '€');
console.log('Chiamata in corso...');
firstUser.chiamata(3);
console.log('Chiamata terminata, hai speso '+ firstUser.spesaChiamate + ' €' );
console.log('Il tuo credito residuo è di '+ firstUser.numero404() + '€');
console.log('Chiamata in corso...');
firstUser.chiamata(3);
console.log('Chiamata terminata , hai speso '+ firstUser.spesaChiamate + ' €' );
console.log('Hai effettuato '+ firstUser.getNumeroChiamate()+' chiamate');
firstUser.azzeraChiamate()
console.log('chiamate azzerate');
console.log('Hai effettuato '+ firstUser.getNumeroChiamate()+' chiamate');

console.log('---------------------------------------');
console.log('---------------------------------------');

let secondUser = new Utente2(5)
console.log(secondUser);
secondUser.ricarica(20)
console.log('La tua ricarica è stata effettuata');
console.log('Il tuo credito residuo è di '+ secondUser.numero404() + '€');
console.log('Chiamata in corso...');
secondUser.chiamata(2);
console.log('Chiamata terminata, hai speso '+ secondUser.spesaChiamate + ' €' );
console.log('Il tuo credito residuo è di '+ secondUser.numero404() + '€');
console.log('Chiamata in corso...');
secondUser.chiamata(7);
console.log('Chiamata terminata, hai speso '+ secondUser.spesaChiamate + ' €' );
console.log('Il tuo credito residuo è di '+ secondUser.numero404() + '€');
console.log('Chiamata in corso...');
secondUser.chiamata(9);
console.log('Chiamata terminata , hai speso '+ secondUser.spesaChiamate + ' €' );
console.log('Hai effettuato '+ secondUser.getNumeroChiamate()+' chiamate');
secondUser.azzeraChiamate()
console.log('chiamate azzerate');
console.log('Hai effettuato '+ secondUser.getNumeroChiamate()+' chiamate');

console.log('---------------------------------------');
console.log('---------------------------------------');

let thirdUser = new Utente3(5)
console.log(thirdUser);
thirdUser.ricarica(40)
console.log('La tua ricarica è stata effettuata');
console.log('Il tuo credito residuo è di '+ thirdUser.numero404() + '€');
console.log('Chiamata in corso...');
thirdUser.chiamata(15);
console.log('Chiamata terminata, hai speso '+ thirdUser.spesaChiamate + ' €' );
console.log('Il tuo credito residuo è di '+ thirdUser.numero404() + '€');
console.log('Chiamata in corso...');
thirdUser.chiamata(1);
console.log('Chiamata terminata, hai speso '+ thirdUser.spesaChiamate + ' €' );
console.log('Il tuo credito residuo è di '+ thirdUser.numero404() + '€');
console.log('Chiamata in corso...');
thirdUser.chiamata(33);
console.log('Chiamata terminata , hai speso '+ thirdUser.spesaChiamate + ' €' );
console.log('Hai effettuato '+ thirdUser.getNumeroChiamate()+' chiamate');
thirdUser.azzeraChiamate()
console.log('chiamate azzerate');
console.log('Hai effettuato '+ thirdUser.getNumeroChiamate()+' chiamate');

console.log('---------------------------------------');
console.log('---------------------------------------');

let utentErrore = new UtenteErrore(0)
console.log(utentErrore);
utentErrore.ricarica(0)
console.log('La tua ricarica è stata effettuata');
console.log('Il tuo credito residuo è di '+ utentErrore.numero404() + '€');
console.log('Chiamata in corso...');
utentErrore.chiamata(15);
console.log('Chiamata terminata, hai speso '+ utentErrore.spesaChiamate + ' €' );
console.log('Il tuo credito residuo è di '+ utentErrore.numero404() + '€');
console.log('Chiamata in corso...');
utentErrore.chiamata(1);
console.log('Chiamata terminata, hai speso '+ utentErrore.spesaChiamate + ' €' );
console.log('Il tuo credito residuo è di '+ utentErrore.numero404() + '€');
console.log('Chiamata in corso...');
utentErrore.chiamata(33);
console.log('Chiamata terminata , hai speso '+ utentErrore.spesaChiamate + ' €' );
console.log('Hai effettuato '+ utentErrore.getNumeroChiamate()+' chiamate');
utentErrore.azzeraChiamate()
console.log('chiamate azzerate');
console.log('Hai effettuato '+ utentErrore.getNumeroChiamate()+' chiamate');