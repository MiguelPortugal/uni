import java.util.*;

/**
 * 
 */

/**
 * Classe que corre o Jogo em si
 * @author Luís Maurício  nº37722 <p> Miguel dos Santos nº38128
 */
public class Fusion {
	static int boardsize;
    static int ncores;

    static Scanner scanner = new Scanner(System.in);
    
    /**
     * Método responsável por mostrar as mensagens do jogo, pedir o tamanho do tabuleiro e o número de cores. Verifica também se os inputs estão dentro dos parametros *
     */
    
    public void start() {
    	boolean start = true;
    	
    	System.out.println("Este é o jogo chamado Fusion, Bem-vindo\nAs regras são simples:\nolhe para o tabuleiro e indique as coordenadas de peças que estejam em conjuntos de pelo menos 3 iguais(em linha e/ou em coluna)\n!!!BOA SORTE!!!");

    	while (start == true) {
    		try {
                System.out.print("Indique o tamanho desejado para tabuleiro (6-50): ");
                boardsize = scanner.nextInt();
                while (boardsize < 6 || boardsize > 50){
                    System.out.print("Indique um tamanho idicado para o tabuleiro (6-50): ");
                    boardsize = scanner.nextInt();
                    System.out.println();
                }
    		}catch (InputMismatchException erroletra) {
                System.out.println("Erro: nao é um número " );
                System.out.println();
                scanner = new Scanner(System.in);
                continue;    			
    		}
    		start = false;
    	}
    	start = true;
        while (start == true){
        	System.out.print("Indique o número de cores diferentes(2-9): ");
        	try {
        		ncores = scanner.nextInt();
                while (ncores < 2 || ncores > 9){
                    System.out.print("Indique um número de cores no intervalo adequado(2-9): \n");
                    ncores = scanner.nextInt();
                }
        	} catch (InputMismatchException erroletra){
                System.out.println("Erro: nao é um número " );
                scanner = new Scanner(System.in);
                continue;
            }
            start = false;
        }
        start = true;
    }
    
    /**
     * Método Main, chama os restantes métodos do jogo
     */
    
    public static void main (String Args[]) {
        Fusion fusion = new Fusion();
        Board jogo = new Board();
        Jogadas jogadas = new Jogadas();
        Input input = new Input();
        fusion.start();
        jogo.newBoard();
        jogo.showBoard();
        System.out.println();
        
    	while (jogadas.possibleToMove()) {
	        input.pedir();
	        jogadas.confirmPlay(input.pedido1, input.pedido2);
	        jogo.refresh();
	        jogo.showBoard();
	        System.out.println();
    	}
    	
    	// Se já não houver jogadas possíveis chama a função que mostra a pontuação
    	
    	jogadas.pontuacao();
    }
}
