
/**
 * Classe que gere as jogadas efectuadas e possíveis
 */
public class Jogadas {
	int cor, pt = 0;  //Cor da peça escolhida pelo utilizador e pontuação no inicio do jogo
	
	/**
	 * Método que confirma se a peça escolhida cumpre os requisitos para ser apagada e apaga também as peças adjacentes que sejam de cores iguais somando a pontuação parcial de cada jogada à pontuação total
	 * @param linha
	 * @param coluna
	 */
	
	public void confirmPlay(int linha, int coluna) {

		boolean alterado = false;
		int dir = 0, esq = 0, bai = 0, cima = 0;

		if (Board.gameBoard[linha][coluna] != 0) {
			cor = Board.gameBoard[linha][coluna];
		}
		
		//Verificar peças abaixo
		if (linha != Fusion.boardsize-1) {
			for (int i = linha+1; i < Fusion.boardsize; i++) {
				if (Board.gameBoard[i][coluna] == cor) {
					bai++;
				} else {
					break;
				}
			}
		}
		
		//Verificar peças acima
		if (linha != 0) {
			for (int i = linha-1; i >= 0; i--) {
				if (Board.gameBoard[i][coluna] == cor) {
					cima++;
				} else {
					break;
				}
			}
		}
		
		//Verificar peças à direita
		if (coluna != Fusion.boardsize-1) {
			for (int i = coluna+1; i < Fusion.boardsize; i++) {
				if (Board.gameBoard[linha][i] == cor) {
					dir++;
				} else {
					break;
				}
			}
		}
		
		//Verificar peças à esquerda
		if (coluna != 0) {
			for (int i = coluna-1; i >= 0; i--) {
				if (Board.gameBoard[linha][i] == cor) {
					esq++;
				} else {
					break;
				}
			}
		}
		
		//Se existir pelo menos 2 peças adjacentes à peça de jogo na horizontal com a mesma cor, passar essas peças ao valor 0
		if (dir+esq >= 2) {
			alterado = true;
			for (int i = coluna; i <= dir+coluna; i++){
				Board.gameBoard[linha][i] = 0;
			}
			for (int i = coluna; i >= coluna-esq; i--){
				Board.gameBoard[linha][i] = 0;
			}
		}
		//Caso contrário repor contadores de peças à direita e à esquerda para não contar para a pontuação
		else {
			dir = 0;
			esq = 0;
		}
		
		//Se existir pelo menos 2 peças adjacentes à peça de jogo na vertical com a mesma cor, passar essas peças ao valor 0
		if (cima+bai >= 2) {
			alterado = true;
			for (int i = linha; i <= bai+linha; i++){
				Board.gameBoard[i][coluna] = 0;
			}
			for (int i = linha; i >= linha-cima; i--){
				Board.gameBoard[i][coluna] = 0;
			}
		}
		//Caso contrário repor contadores de peças à direita e à esquerda para não contar para a pontuação
		else {
	          bai = 0;
	          cima = 0;			
		}
		
		//Se foram removidas peças na horizontal ou na vertical remover também a peça escolhida e adicionar a pontuação da jogada à pontuação total
		if (alterado){
			Board.gameBoard[linha][coluna] = 0;
			pt += (cima+bai+esq+dir+1)*(cima+bai+esq+dir+1);
		} else {
			System.out.println("########################\nJogada Impossível\n########################");
		}
	}
	
	/**
	 * Método que confirma se ainda existe jogadas possíveis, se não existir retorna false
	 */
	
	public boolean possibleToMove() {
		boolean fim = false;
		int c = 0; //Variável para guardar a cor da peça
		
		//Passar todas as peças a confirmar se existe peças adjacentes suficientes para continuar o jogo
		for (int j = 0; j < Fusion.boardsize-2; j++) {
			for (int i = 0; i < Fusion.boardsize-2; i++) {
				c = Board.gameBoard[j][i];
				if (Board.gameBoard[j][i+1] == c && Board.gameBoard[j][i+2] == c) {
					fim = true;
					break;
				} else if (Board.gameBoard[j+1][i] == c && Board.gameBoard[j+2][i] == c) {
					fim = true;
					break;
				}
			}
		}
		return fim;
	}
	
	/**
	 * Método que mostra a pontuação final
	 */
	
	public void pontuacao(){
		System.out.println("Não existem mais jogadas possíveis, a pontuação final é: " + pt);
	}
}
