var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(redditoAnnuo, tasseInps, tasseIrpef, codRed) {
        this.codRed = codRed;
        this.redditoAnnuo = redditoAnnuo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    Lavoratore.prototype.getTasseInps = function () {
        var totaleInps = ((this.redditoAnnuo * this.tasseInps) / 100);
        return totaleInps;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        var totaleIrpef = ((this.redditoAnnuo * this.tasseIrpef) / 100);
        return totaleIrpef;
    };
    Lavoratore.prototype.getUtileTasse = function () {
        var utileTasse = this.redditoAnnuo + ((this.redditoAnnuo * this.codRed) / 100);
        return utileTasse;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        var redditoAnnuoNetto = (this.getUtileTasse() - (this.getTasseInps() + this.getTasseIrpef()));
        return redditoAnnuoNetto;
    };
    return Lavoratore;
}());
var Lavoratori = /** @class */ (function (_super) {
    __extends(Lavoratori, _super);
    function Lavoratori(redditoAnnuo, tasseInps, tasseIrpef, codRed) {
        return _super.call(this, redditoAnnuo, tasseInps, tasseIrpef, codRed) || this;
    }
    return Lavoratori;
}(Lavoratore));
var artigiano = new Lavoratori(25000, 5, 7, 1.5);
console.log('utile tasse ARTIGIANO:' + artigiano.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + artigiano.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + artigiano.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + artigiano.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
var liberoProfessionista = new Lavoratori(50000, 8, 10, 2);
console.log('utile tasse ARTIGIANO:' + liberoProfessionista.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + liberoProfessionista.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + liberoProfessionista.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + liberoProfessionista.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
var commerciante = new Lavoratori(35000, 6.5, 8, 2.5);
console.log('utile tasse ARTIGIANO:' + commerciante.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + commerciante.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + commerciante.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + commerciante.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
//# sourceMappingURL=app.js.map