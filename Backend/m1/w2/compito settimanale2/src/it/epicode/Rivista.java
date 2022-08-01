package it.epicode;

public class Rivista extends Catalogo{

	Periodicita periodicita;

	public Rivista(String isbncod, String titolo, String annoDiPubblicazione, int numeroPag,Periodicita periodicita) {
		super(isbncod, titolo, annoDiPubblicazione, numeroPag);
		this.periodicita = periodicita;
		
	}

	public Periodicita getPeriodicita() {
		return periodicita;
	}

	public void setPeriodicita(Periodicita periodicita) {
		this.periodicita = periodicita;
	}
	
	
	@Override
	public String toString() {
		return "Rivista [ codice ISBN: " + Isbncod + ", titolo: " + titolo + ", Anno di pubblicazione: " + AnnoDiPubblicazione
				+ ", N° di pagine: " + numeroPag + ", Periodicità: " + periodicita + " ]";
	}
	
}
