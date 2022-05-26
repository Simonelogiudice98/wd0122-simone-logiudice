"use strict";
class Abbigliamento {
    constructor(capo, codprod, collezione, colore, disponibile, id, modello, prezzoivaesclusa, prezzoivainclusa, quantita, saldo) {
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
    getSaldoCapo() {
        let calcoloSaldo = (this.prezzoivaesclusa * this.saldo) / 100;
        return calcoloSaldo;
    }
    getAcquistoCapo() {
        let acquisto = (this.prezzoivainclusa - this.getSaldoCapo());
        return acquisto;
    }
}
fetch('Abbigliamento.json').then(res => res.json()).then(res => {
    let arrVestiti = [];
    for (let vestito of res) {
        let vestiti = new Abbigliamento(vestito.capo, vestito.codprod, vestito.collezione, vestito.colore, vestito.disponibile, vestito.id, vestito.modello, vestito.prezzoivaesclusa, vestito.prezzoivainclusa, vestito.quantita, vestito.saldo);
        arrVestiti.push(vestiti);
    }
    return arrVestiti;
}).then(res => {
    for (let vestito of res) {
        console.log('lo sconto ammonta a ' + vestito.getSaldoCapo() + '€');
        console.log('il capo costa ' + vestito.getAcquistoCapo() + '€');
        console.log('---------------------');
    }
});
//# sourceMappingURL=app.js.map