/**
 * Classe para gerir os inputs das coordenadas
 */

public class Input {
	int pedido1;
	int pedido2;
	
	public void pedir() {
		char linha, coluna;
		
		//Pedir a linha e convertê-la em inteiro para poder ser processada
		System.out.println("Qual a linha?");
		linha = Fusion.scanner.next().charAt(0); //Usa apenas o 1º carater
		int pedidol = (char)(linha-65); //
		if (pedidol > 27) {
			pedidol = pedidol-32;
		}
		while (0 > pedidol || pedidol > Fusion.boardsize - 1) {
			System.out.println("Erro!\nA linha tem de estar entre A e " + (char)(Fusion.boardsize + 64) + "\n");
			System.out.println("Qual a linha?");
			linha = Fusion.scanner.next().charAt(0);
			pedidol = (char)(linha-65);
			if (pedidol > 27){
				pedidol = pedidol-32;
			}
		}
		pedido1 = pedidol;
        
        
		//Pedir a coluna e convertê-la em inteiro para poder ser processada
		System.out.println("Qual a coluna?");
		coluna = Fusion.scanner.next().charAt(0);
		int pedidoc = (char)(coluna-65);
		if (pedidoc > 27){
			pedidoc = pedidoc-32;
		}
		while (0 > pedidoc || pedidoc > Fusion.boardsize){
			System.out.println("Erro!\nA coluna tem de estar entre A e " + (char)(Fusion.boardsize + 64) + "\n");
			System.out.println("Qual a coluna?");
			coluna = Fusion.scanner.next().charAt(0);
			pedidoc = (char)(coluna-65);
			if (pedidoc > 27){
				pedidoc = pedidoc-32;
			}
		}
		pedido2 = pedidoc;
    }
}
