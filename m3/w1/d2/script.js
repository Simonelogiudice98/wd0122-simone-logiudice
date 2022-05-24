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
var Conto = /** @class */ (function () {
    function Conto(balanceInit) {
        this.balanceInit = balanceInit;
    }
    Conto.prototype.deposito = function (deposito) {
        this.balanceInit = this.balanceInit + deposito;
        return deposito;
    };
    Conto.prototype.prelievo = function (prelievo) {
        this.balanceInit = this.balanceInit - prelievo;
        return prelievo;
    };
    Conto.prototype.prelievo2 = function (prelievo2) {
        this.balanceInit = this.balanceInit - prelievo2;
        return prelievo2;
    };
    Conto.prototype.saldo = function () {
        return this.balanceInit;
    };
    return Conto;
}());
var son = new Conto(0);
var Conto2 = /** @class */ (function (_super) {
    __extends(Conto2, _super);
    function Conto2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Conto2.prototype.addInterest = function () {
        return this.balanceInit = this.balanceInit - ((this.balanceInit * 10) / 100);
    };
    return Conto2;
}(Conto));
var madre = new Conto2(0);
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
