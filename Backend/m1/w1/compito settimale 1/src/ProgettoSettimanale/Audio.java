package ProgettoSettimanale;
//DEFINIAMO UNA CLASSE "AUDIO", CHE ESTENDE LA CLASSE ASTRATTA MAIN ED IMPLEMENTA LE INTERFACCE RIPRODUCI, E VISUALIZZA, IN QUANTO ELEMENTO VISUALIZZABILE E RIPRODUCIBILE
public class Audio extends Media implements Riproduci {
	
	private int volume;
	private int durata;
	
	//CREIAMO UN  COSTRUTTORE E INSTANZIAMO I PARAMENTRI
	public Audio(String titolo, int v, int d) {
		super(titolo);
		volume=v;
		durata=d;
	}

	@Override
	
	public void play() {
		
		System.out.println("Buon ascolto!");
		String escl = "";
		for(int i=0; i<volume; i++) {
			escl += "!";
		}
		for(int i=0; i<durata; i++) {
			System.out.println("Canzone:"+titolo+" "+escl+ " riprodotti:"+(i+1)+"secondi, restanti altri:" + (durata-(i+1))+"secondi");
			
			}
		System.out.println("La canzone:"+ titolo + " è terminata");
	}

	
	@Override
	public void volUp() {
		volume++;
		
	}
	@Override
	public void volDown() {
		volume--;
	}
}
