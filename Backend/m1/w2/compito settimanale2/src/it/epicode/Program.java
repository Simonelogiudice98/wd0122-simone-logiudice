package it.epicode;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.FileUtils;

public class Program {
	
	private static Map<String, Catalogo> mainCatalog = new HashMap<>();
	
	public static void main(String[] args) throws IOException {

		Catalogo libro1 = new Libro("1234", "Libro 1", "2012", 963, "Autore 1", "Fantasy");
		Catalogo libro2 = new Libro("1534", "Libro 2", "2018", 763, "Autore 2", "Adventure");
		Catalogo libro3 = new Libro("4294", "Libro 3", "2020", 523, "Autore 3", "Dramatic");
		Catalogo libro4 = new Libro("3234", "Libro 4", "2010", 876, "Autore 1", "Adventure");
		Catalogo libro5 = new Libro("7034", "Libro 5", "2022", 126, "Autore 2", "Fantasy");
		Catalogo rivista1 = new Rivista("1321", "Rivista 1", "2020", 23, Periodicita.MENSILE);
		Catalogo rivista2 = new Rivista("2721", "Rivista 2", "2019", 43, Periodicita.SETTIMANALE);
		Catalogo rivista3 = new Rivista("4381", "Rivista 3", "2012", 51, Periodicita.SEMESTRALE);
		Catalogo rivista4 = new Rivista("9321", "Rivista 4", "2018", 22, Periodicita.MENSILE);
		Catalogo rivista5 = new Rivista("4322", "Rivista 5", "2022", 63, Periodicita.SETTIMANALE);

		addElement(libro1);
		addElement(libro2);
		addElement(libro3);
		addElement(libro4);
		addElement(libro5);
		addElement(rivista1);
		addElement(rivista2);
		addElement(rivista3);
		addElement(rivista4);
		addElement(rivista5);

		System.out.println("CATALOGO INIZIALE COMPLETO:");
		mainCatalog.forEach((k, v) -> System.out.println(v));
		System.out.println("----------------------------");
		System.out.println("");

		System.out.println("RICERCA PER ANNO (2012):");
		searchForPubblicationYear("2012");
		System.out.println("----------------------------");
		System.out.println("");

		String ISBNCodeToSearch = "3234";
		System.out.println("RICERCA PER CODICE ISBN : (" + ISBNCodeToSearch + ")");
		searchForISBNCode(ISBNCodeToSearch);
		System.out.println("----------------------------");
		System.out.println("");

		System.out.println("RICERCA PER AUTORE (Autore 1):");
		searchForAuthor("Autore 1");
		System.out.println("----------------------------");
		System.out.println("");

		saveOnDisk();

		System.out.println("LETTURA DOPO SCRITTURA SU DISCO:");
		loadFromDisk();

	}
	
	public static void addElement(Catalogo element) {
		mainCatalog.put(element.getIsbncod(), element);
	}

	public static void deleteElement(Catalogo element) {
		mainCatalog.remove(element.getIsbncod());
	}

	public static void searchForISBNCode(String ISBNcode) {
		System.out.println(mainCatalog.get(ISBNcode));
	}

	public static void searchForPubblicationYear(String pubblicationYear) {
		mainCatalog.values().stream().filter(c -> c.getAnnoDiPubblicazione() == pubblicationYear)
				.forEach(System.out::println);

	}

	public static void searchForAuthor(String author) {
		mainCatalog.values().stream().filter(e -> e instanceof Libro && ((Libro) e).getAutore() == author)
				.forEach(System.out::println);
	}

	public static void saveOnDisk() throws IOException {

		String catalogToText = "";

		for (Catalogo cat : mainCatalog.values()) {
			catalogToText += (cat.toString() + ";");
		}

		File catalogFile = new File("./catalog.txt");

		FileUtils.writeStringToFile(catalogFile, catalogToText, "UTF-8");
	}

	public static void loadFromDisk() throws IOException {

		File file = new File("./catalog.txt");

		String readString = FileUtils.readFileToString(file, "UTF-8");
		String[] catalog = readString.split(";");

		for (String element : catalog) {
			System.out.println(element);
		}

	}

	

}
