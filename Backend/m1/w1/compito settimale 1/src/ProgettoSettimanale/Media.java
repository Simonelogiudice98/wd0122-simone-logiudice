package ProgettoSettimanale;
// CLASSE PRINCIPALE ASTRATTA CON GLI ATTRIBUTI COMUNI A TUTTI GLI ELEMENTI
public abstract class Media {
	//DEFINIZIONE DI TITOLO
	protected String titolo;
	//CREIAMO UN COSTRUTTORE PER IL TITOLO
	public Media(String titolo) {
		//ASSEGNAZIONE DEL TITOLO
		this.titolo = titolo;
		
	}
	public void play(){};
	public void show(){};
}
