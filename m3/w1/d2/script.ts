
class Conto{
    
    
    public balanceInit:number;
    constructor(balanceInit:number){
        this.balanceInit = balanceInit;
    }
    
    public deposito(deposito:number){
         this.balanceInit = this.balanceInit + deposito
        return deposito
    }

    
    public prelievo(prelievo:number){
         this.balanceInit = this.balanceInit - prelievo
        return prelievo

    }
    public prelievo2(prelievo2:number){
         this.balanceInit = this.balanceInit - prelievo2
        return prelievo2

    }

    public saldo(){
        return this.balanceInit
    }
}

let son = new Conto(0)

class Conto2 extends Conto{
     addInterest(){
        return this.balanceInit = this.balanceInit -((this.balanceInit * 10) /100)
    }
}

let madre = new Conto2(0)

console.log('--------------son account----------------------------------' + '\n');
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposito(1000));
console.log('withdraw:-' + son.prelievo(500));
console.log('withdraw:-' + son.prelievo2(400));
console.log('totalBalance:' + son.saldo());


console.log('--------------mother account----------------------------------' + '\n');
console.log(madre);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + madre.deposito(1000));
console.log('withdraw:-' + madre.prelievo(500));
console.log('withdraw:-' + madre.prelievo2(400));
console.log('totalBalance:' + madre.saldo());
console.log('totalBalance:' + madre.addInterest());
