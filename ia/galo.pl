%e([[l,l,l],[l,l,l],[l,l,l],x]
% [[x,o,l],[l,l,l],[l,l,l]]

  
%estado_inicial(e([[l,l,l],[l,l,l],[l,l,l]],x)).
% estado_inicial(e([[l,l,l],[l,l,l],[l,l,l]],x)).

estado_inicial(e([[x,o,x],[o,o,x],[l,x,o]],x)).
    
%terminal(31).
%terminal(e([[X,X,X]|_],_):- X=x;X=o. 
%terminal([[x|_],[x|_],[x|_]]).

terminal(E,_):- terminal(E).
	  
terminal(e([L1,L2,L3],_),X):- igual(L1,X); igual(L2,X); igual(L3,X).

terminal(e([[L1,_,_],[L1,_,_],[L1,_,_]],_),L1):- L1 \= l.

terminal(e([[_,L1,_],[_,L1,_],[_,L1,_]],_),L1):- L1 \= l.
terminal(e([[_,_,L1],[_,_,L1],[_,_,L1]],_),L1):- L1 \= l.

terminal(e([[L1,_,_],[_,L1,_],[_,_,L1]],_),L1):- L1 \= l.
terminal(e([[_,_,L1],[_,L1,_],[L1,_,_]],_),L1):- L1 \= l.

terminal(e([L1,L2,L3],_),e):- \+ (member(l,L1); member(l,L2); member(l,L3)).

	  
%função de utilidade, retorna o valor dos estados terminais, 1 ganha -1 perde
%valor(E,V,_):- terminal(E), X is P mod 2, X=0,!.

valor(E,V,_):- terminal(E,X), (X=x,V=1;X=o,V= -1;X=e, V=0).

% op1(-estado,-jogada,-estado seguinte)

	  
op1(e([L1,L2,L3],X),joga(X,2,C),e([L1,L21,L3],O)):- inv(X,O),
	 acrescenta(L2,X,L21,C).
op1(e([L1,L2,L3],X),joga(X,3,C),e([L1,L2,L31],O)):- inv(X,O),
	 acrescenta(L3,X,L31,C).
op1(e([L1,L2,L3],X),joga(X,1,C),e([L12,L2,L3],O)):- inv(X,O),
	  acrescenta(L1,X,L12,C).


acrescenta([l,L2,L3], X,[X,L2,L3],1).
acrescenta([A,l,L3], X,[A,X,L3],2).
acrescenta([A,B,l], X,[A,B,X],3).
		    
	 
inv(x,o).
inv(o,x).


jogaGalo:- estado_inicial(E), agente(E).

agente(E):- terminal(E,_X), valor(E,V,_), write(vitoria(V)), nl.
agente(Ei):-  minimax_decidir(Ei,Op),
	        write(jogo(Op)),
	  op1(Ei,Op,Es),
	       write(Es),nl,
		adversario(Es).

	  
            adversario(E):- terminal(E,_), valor(E,V,_), write(vitoria(V)), nl.

	     adversario(Es):- write('linha - '), read(I),
		write('coluna . '), read(J),
	  op1(Es,joga(_,I,J),Ess), write(Ess),nl,
	       agente(Ess).
