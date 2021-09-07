g(Jogo):- [Jogo], estado_inicial(Ei), alfabeta(Ei,Op),
write(Op),nl.

alfabeta(Ei,terminou):-terminal(Ei).

alfabeta(Ei,Opf) :- 
	findall(Vc-Nr_coluna, (jogada(Ei,'A',Nr_coluna,Tabuleiro), alfabeta_min(Tabuleiro,Vc,'A',-10000,10000)), L),
	escolhe_max(L,Opf).
alfabeta_min(Ei,Val,_,_,_) :- 
	terminal(Ei), 
	valor(Ei,Val), !.
alfabeta_min(Ei,Val,P,Alfa,Beta) :- 
	muda_jogador(P,J),
	V is 10000,
	findall(Tabuleiro, jogada(Ei,J,_,Tabuleiro), L),
	processa_lista_min(L, J, V, Alfa, Beta, Val), !.


processa_lista_min([], _, V, _, _, V).
processa_lista_min([H|T], P, V, A, B, V1) :-
	alfabeta_max(H, V2, P, -10000, 10000),
	min(V, V2, V3),
	(V3 < A, V1 is V3; min(B, V3, B1), processa_lista_min(T, P, V3, A, B1, V1)).


alfabeta_max(Ei,Val,_,_,_) :- 
	terminal(Ei), 
	valor(Ei,Val), !.

alfabeta_max(Ei,Val,P,Alfa,Beta) :- 
	muda_jogador(P,J),
	V is -10000,
	findall(Tabuleiro, jogada(Ei,J,_,Tabuleiro), L),
	processa_lista_max(L, J, V, Alfa, Beta, Val), !.

processa_lista_max([], _, V, _, _, V).
processa_lista_max([H|T], P, V, A, B, V1) :-
	alfabeta_min(H, V2, P, -10000, 10000),
	max(V, V2, V3),
	(V3 >= B, V1 is V3; max(A, V3, A1), processa_lista_max(T, P, V3, A1, B, V1)).



minimax_decidir(Ei,terminou):-terminal(Ei).

minimax_decidir(Ei,Opf):-
	findall(Vc-Nr_coluna,(jogada(Ei,'A',Nr_coluna,Tabuleiro),minimax_valor(Tabuleiro,Vc,'A')),L),
	escolhe_max(L,Opf).

minimax_valor(Ei,Val,_):-terminal(Ei),valor(Ei,Val).

minimax_valor(Ei,Val,P):-
	muda_jogador(P,J),
	findall(Val1,(jogada(Ei,J,_,Es),minimax_valor(Es,Val1,J)),V),
	seleciona_valor(V,P,Val).

seleciona_valor(V,P,Val) :- 
	P ='A', 
	maximo(V,Val).
seleciona_valor(V,_,Val):- minimo(V,Val).