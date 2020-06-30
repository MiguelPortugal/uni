import java.util.Random;
/**
 * Classe que trata de criar e mostrar o tabuleiro de jogo
 */
public class Board {
	static int gameBoard[][]; //Matriz que guarda as cores de cada peça
	
	/**
	 * Método que cria um novo tabuleiro com o tamanho pedido e enche com peças com o número de cores que o utilizador deseja
	 */
	public void newBoard() {
		
		gameBoard = new int [Fusion.boardsize][Fusion.boardsize];
		Random r = new Random ();
		
		for (int i = 0; i < gameBoard.length; i++) {
			for (int j = 0; j < gameBoard[i].length; j++) {
				gameBoard[i][j] = r.nextInt(Fusion.ncores) + 1;  //escolhe numeros para preencher o tabuleiro excepto o 0
			}
		}
	}
	
	/**
	 * Método que mostra a matriz em forma de tabuleiro, atribuindo letras de A a Z às linhas e colunas
	 */
	
	public void showBoard() {
		System.out.print("   ");
		for (int z = 0; z < gameBoard.length; z++){
			System.out.print((char)(65+z)+" ");
		}

		System.out.println(" ");
		System.out.println(" ");
		for (int i = 0; i < gameBoard.length; i++) {
			System.out.print((char)(65+i)+"  ");
			int contador = 0;
			for (int j = 0; j < gameBoard[i].length; j++) {
				System.out.print(gameBoard[i][j] + " ");
				contador++;
				if (contador == Fusion.boardsize){
					System.out.println(" ");
				}
			}
		}
		System.out.println(" ");
	}
	
	/**
	 * Método que faz descer as peças que estavam acima das eliminadas e preenche os espaços livres com cores aleatórias
	 */
	
	public void refresh() {
		Random r = new Random ();
		int l = gameBoard.length;
		
		//Faz com que as peças desçam para o lugar das eliminadas substituindo as posiçoes com zeros
		for(int i = l-1; i >= 0; i--){
			for(int j = l-1; j >= 0; j--){
				if(gameBoard[j][i] == 0){
					for(int k = j-1; k >= 0; k--){
						if(gameBoard[k][i] != 0){
							gameBoard[j][i] = gameBoard[k][i];
							gameBoard[k][i] = 0;
							break;
						}
					}
				}
			}
		}
		
		//Preenche os espaços que estão a zero com cores aleatorias
		for (int i = l-1; i >= 0; i--){
			for (int j = l-1; j >= 0; j--){
				if(gameBoard[i][j] == 0){
					gameBoard[i][j] = r.nextInt(Fusion.ncores) + 1;
				}
			}
		}
	}
}
