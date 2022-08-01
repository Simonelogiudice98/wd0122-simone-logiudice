package it.epicode;

public abstract class Catalogo {
	
	protected String Isbncod;
	protected String titolo;
	protected String AnnoDiPubblicazione;
	protected int numeroPag;
	
	public Catalogo(String isbncod, String titolo, String annoDiPubblicazione, int numeroPag) {
		
		this.Isbncod = isbncod;
		this.titolo = titolo;
		this.AnnoDiPubblicazione = annoDiPubblicazione;
		this.numeroPag = numeroPag;
		
		
	}

	public String getIsbncod() {
		return Isbncod;
	}

	public void setIsbncod(String isbncod) {
		Isbncod = isbncod;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public String getAnnoDiPubblicazione() {
		return AnnoDiPubblicazione;
	}

	public void setAnnoDiPubblicazione(String annoDiPubblicazione) {
		AnnoDiPubblicazione = annoDiPubblicazione;
	}

	public int getNumeroPag() {
		return numeroPag;
	}

	public void setNumeroPag(int numeroPag) {
		this.numeroPag = numeroPag;
	}

	

}
