package ProgettoSettimanale;
//CREIAMO UNA CLASSE "VIDEO", CHE ESTENDE  MAIN ED IMPLEMENTA LE INTERFACCE RIPRODUCI, E VISUALIZZA
public class Video extends Media implements Riproduci, Visualizza {
	//DEFINIAMO I PARAMETRI CHE QUESTA CLASSE ANDRà AD UTILIZZARE
	private int volume;
	private int lumix;
	private int durata;
	
	//CREIAMO UN COSTRUTTORE E ISTANZIAMO I PARAMETRI
	public Video(String titolo,int l, int d, int v) {
		super(titolo);
		lumix = l;
		durata=d;
		volume=v;
	}

	@Override
	//DEFINIAMO IL METODO PLAY
	public void play() {
		//DEFINIAMO UNA VARIABILE STRINGA 
		String lux = "";
		//ATTRAVERSO QUESTO CICLO ANDIAMO A COSTRUIRE LA VARIABILE STRINGA CON TANTI ASTERISCHI TANTO QUANTO è ALTO IL VALORE DELLA LUMINOSITà (LUMIX)
		for(int i=0; i<lumix; i++) {
			lux += "*";
		}
		// FACCIAMO UN CICLO CON LO STESSO FUNZIONAMENTO PER  IL VOLUME
		String escl = "";
		for(int i=0; i<volume; i++) {
			escl += "!";
		}
		for(int i=0; i<volume; i++) {
			escl += "!";
		}
		
		System.out.println("Buona visione!");
		
		//QUI ABBIAMO LA "RIPRODUZIONE" DEL CONTENUTO
		for(int i=0; i<durata; i++) {
			System.out.println("video:"+titolo+" "+escl+" "+lux+ " riprodotti:"+(i+1)+"secondi, restanti altri:" + (durata-(i+1))+"secondi");
			
			}
		
		System.out.println("Il video:"+ titolo + " è terminato");
		
	}
	//UNA STRINGA PER VISUALIZZARE I DETTAGLI DEL VIDEO
	@Override
	public void show() {
		System.out.println("dettagli video: Titolo: "+titolo+" durata:"+durata+"s");
	}

	//DEFINIAMO I METODI DICHIARATI NELL'INTERFACCIA
	@Override
	public void volUp() {
		volume++;
	}

	@Override
	public void volDown() {
		volume--;
	}
	
	@Override
	public void AumentaL() {
		lumix++;
	}

	@Override
	public void DiminuisciL() {
		lumix--;
	}
}