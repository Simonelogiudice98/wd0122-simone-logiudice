abstract class Lavoratore{
    
    public codRed:number;
    public redditoAnnuo:number;
    public tasseInps:number;
    public tasseIrpef:number;
    public totaleIrpef:number;
    public totaleInps:number;
    

    constructor(redditoAnnuo:number, tasseInps:number, tasseIrpef:number, codRed:number){
        this.codRed = codRed;
        this.redditoAnnuo = redditoAnnuo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
        
    }
    getTasseInps():number{
        var totaleInps = ((this.redditoAnnuo * this.tasseInps)/100)
        return totaleInps
    }
    getTasseIrpef():number{
        var totaleIrpef =  ((this.redditoAnnuo * this.tasseIrpef)/100)
        return totaleIrpef
    }
    getUtileTasse():number{
        let utileTasse = this.redditoAnnuo +((this.redditoAnnuo * this.codRed)/100)
        return utileTasse
    }

    getRedditoAnnuoNetto():number{
        let redditoAnnuoNetto = (this.getUtileTasse() - (this.getTasseInps() + this.getTasseIrpef()))
        return redditoAnnuoNetto
    }
}

class Lavoratori extends Lavoratore{
    constructor(redditoAnnuo:number, tasseInps:number, tasseIrpef:number, codRed:number) {
        super(redditoAnnuo, tasseInps, tasseIrpef, codRed);
       
    }
}



let artigiano = new Lavoratori(25000,5,7,1.5);

console.log('utile tasse ARTIGIANO:' +artigiano.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + artigiano.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' +artigiano.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + artigiano.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');

let liberoProfessionista = new Lavoratori(50000,8,10,2);
console.log('utile tasse ARTIGIANO:' + liberoProfessionista.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + liberoProfessionista.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + liberoProfessionista.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + liberoProfessionista.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');

let commerciante = new Lavoratori(35000,6.5,8,2.5);
console.log('utile tasse ARTIGIANO:' + commerciante.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + commerciante.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + commerciante.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + commerciante.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');

