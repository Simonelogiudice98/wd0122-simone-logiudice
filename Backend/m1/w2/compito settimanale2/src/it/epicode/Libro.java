package it.epicode;

public class Libro extends Catalogo {
	private String autore;
	private String genere;
	
	public Libro(String isbncod, String titolo, String annoDiPubblicazione, int numeroPag,String autore, String genere) {
		super(isbncod, titolo, annoDiPubblicazione, numeroPag);
		this.autore = autore;
		this.genere = genere;
	}

	

	public String getAutore() {
		return this.autore;
	}

	public void setAutore(String autore) {
		this.autore = autore;
	}

	public String getGenere() {
		return genere;
	}

	public void setGenere(String genere) {
		this.genere = genere;
	}
	
	@Override
	public String toString() {
		return "Libro [ codice ISBN: " + Isbncod + ", titolo: " + titolo + ", Anno di pubblicazione: " + AnnoDiPubblicazione
				+ ", N° di pagine: " + numeroPag + ", autore: " + autore + ", genere: " + genere + " ]";
	}
	
	
}
