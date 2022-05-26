class Abbigliamento{
    capo:string 
    codprod:number 
    collezione:string 
    colore:string 
    disponibile:string 
    id:number 
    modello:number 
    prezzoivaesclusa:number 
    prezzoivainclusa:number 
    quantita:number
    saldo:number 

    constructor( capo:string, codprod:number, collezione:string, colore:string, disponibile:string, id:number, modello:number,prezzoivaesclusa:number, prezzoivainclusa:number,quantita:number,saldo:number){
        this.capo = capo;
        this.codprod = codprod;
        this.collezione = collezione;
        this.colore = colore;
        this.disponibile = disponibile;
        this.id = id;
        this.modello = modello;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.quantita = quantita;
        this.saldo = saldo;
    }
    getSaldoCapo():number{
        let calcoloSaldo = (this.prezzoivaesclusa * this.saldo)/100
        return calcoloSaldo;
    }

    getAcquistoCapo():number{
        let acquisto = (this.prezzoivainclusa - this.getSaldoCapo())
        return acquisto;
    }
}


fetch('Abbigliamento.json').then(res => res.json()).then(res => {
    let arrVestiti:any = [];
   
    for(let vestito of res){
      
       let vestiti = new Abbigliamento(vestito.capo, vestito.codprod, vestito.collezione,vestito.colore,vestito.disponibile,vestito.id,vestito.modello,vestito.prezzoivaesclusa,vestito.prezzoivainclusa,vestito.quantita,vestito.saldo)

       arrVestiti.push(vestiti)
       
       
    }return arrVestiti
     
     
    
}).then(res => {
    for(let vestito of res){
        console.log('lo sconto ammonta a '+vestito.getSaldoCapo()+'€');
        console.log('il capo costa '+ vestito.getAcquistoCapo()+ '€');
        console.log('---------------------');
        
        
    }
    
})
       

   
    

