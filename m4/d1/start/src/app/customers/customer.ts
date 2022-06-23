import { Address } from "../models/address";

export class Customer {

  id!:number;
  nome!:string;
  cognome!:string;
  indirizzo!:Address;
  email!:string;
  password!:string;

  constructor() {
    this.nome = '';
    this.cognome = '';
    this.email = '';
    this.password = '';
    this.indirizzo.via = '';
    this.indirizzo.citta = '';
    this.indirizzo.cap = 0;
    this.indirizzo.civico = 0;
  }
}

