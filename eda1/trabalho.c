#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>
#include <wchar.h>
#include <locale.h>
#include "hashtable.c"
#include "LinkedList.c"
#include "LinkedListWords.c"

int main(int argc, char* argv[])
{

  LinkedList* array[8];

  for(int i = 0; i < 8; i++){
      LinkedList* list = new_linkedList();
      switch(i){
        case 0:
            list_insert(list, "a");
            list_insert(list, "b");
            list_insert(list, "c");
            list_insert(list, "á");
            list_insert(list, "à");
            list_insert(list, "â");
            list_insert(list, "ã");
            list_insert(list, "ç");
            array[i] = list;
            /* list_print(list);
            printf("\n"); */
            break;
        case 1:
            list_insert(list, "d");
            list_insert(list, "e");
            list_insert(list, "f");
            list_insert(list, "é");
            list_insert(list, "ê");
            array[i] = list;
            /* list_print(list);
            printf("\n"); */
            break;
        case 2:
            list_insert(list, "g");
            list_insert(list, "h");
            list_insert(list, "i");
            list_insert(list, "í");
            array[i] = list;
            /* list_print(list);
            printf("\n"); */
            break;
        case 3:
            list_insert(list, "j");
            list_insert(list, "k");
            list_insert(list, "l");
            array[i] = list;
            /* list_print(list);
            printf("\n"); */
            break;
        case 4:
            list_insert(list, "m");
            list_insert(list, "n");
            list_insert(list, "o");
            list_insert(list, "ó");
            list_insert(list, "ô");
            list_insert(list, "õ");
            array[i] = list;
            /* list_print(list);
            printf("\n"); */
            break;
        case 5:
            list_insert(list, "p");
            list_insert(list, "q");
            list_insert(list, "r");
            list_insert(list, "s");
            array[i] = list;
            /* list_print(list);
            printf("\n"); */
            break;
        case 6:
            list_insert(list, "t");
            list_insert(list, "u");
            list_insert(list, "v");
            list_insert(list, "ú");
            array[i] = list;
            /* list_print(list);
            printf("\n"); */
            break;
        case 7:
            list_insert(list, "w");
            list_insert(list, "x");
            list_insert(list, "y");
            list_insert(list, "z");
            array[i] = list;
            /* list_print(list);
            printf("\n"); */
            break;
      }
  }




  time_t begin, end;
   
  HashTable* hashtable = InitializeTable();

  //begin = time(NULL);
    
  FILE* fp;
  char* filename = argv[1];
   
  wchar_t str[40] = L"";
  setlocale(LC_ALL,"");

  /* for(int i = 0; i < wcslen(str); i++){
    wprintf(L"%lc\n", str[i]);
    //wprintf(L"%d\n", wcslen(str));
  } */


  fp = fopen(filename, "r");

  if (fp == NULL){
      printf("Could not open file %s\n",filename);
      return 1;
  }
  char t;
  //wchar_t *fgetws(wchar_t *wcs, int n, FILE *stream);
  int i = 15;
  while(i > 0)
  {
    fwscanf(fp, L"%ls\n", str);
    wprintf(L"%lc\n", str[0]);
    /* int x = atoi("vasco");
    printf("%d\n", x); */
    i--;
  }

  char c = 'a';
  printf("ASCII value of %c = %d\n", c, c);

  //as tabelas com os "a" e "b" e assim tem de ser com os inteiros do código ASCII

  char ch = 'A';
  printf("ch = %c\n",ch);
  printf("ch = %d, hence an integer\n",ch);

  //1668505974


  /* stream = fopen("myfile.dat", "r");
 
    Read data from file.
 
   fwscanf(stream, L"%s", &s[0]);
   fwscanf(stream, L"%ld", &l);
   fwscanf(stream, L"%c", &c);
   fwscanf(stream, L"%f", &fp);
 
   printf("string = %s\n", s);
   printf("long integer = %ld\n", l);
   printf("char = %c\n", c);
   printf("float = %f\n", fp);
   return 0; */
  
 /*  while(fgets(str, 40, fp)!= NULL){
      printf("%s", str[0,1]);
      int i = 0; */
      /* while(strcmp(str,"\0")){
        char ui = str[0];
        int val = atoi(ui);
        printf("%c\n", val);
        i++;
      } */
  //}

  /* end = time(NULL);

  printf("%f\n", difftime(end, begin)); */




  /* printf("Selecione um número para escolher um grupo de letras:\n");

  printf("\n2: a b c á à â ã ç");
  printf("\n3: d e f é ê");
  printf("\n4: g h i í");
  printf("\n5: j k l");
  printf("\n6: m n o ó ô õ");
  printf("\n7: p q r s");
  printf("\n8: t u v ú");
  printf("\n9: w x y z");

  printf("\n");

  char word[38] = " ";
  char mensagem[500];
  bool getOut = false;

  

  while(getOut == false)
  {
    printf("** Escreva a sua mensagem **\n");
    scanf("%s", word);

    if(!strcmp(word, "1"))
    {
      printf("Mensagem: %s \n", mensagem);
    }
    else if(!strcmp(word, "0"))
    {
      char decision[] = " ";
         
      while(strcmp(decision, "n") && strcmp(decision, "N") && strcmp(decision, "s") && strcmp(decision, "S"))
      {
        printf("Deseja sair da aplicação (s/n)? \n");
        scanf("%s", decision);

        if(!strcmp(decision, "s") || !strcmp(decision, "S"))
        {
          getOut = true;
        }
      }
    }
    else
    {
      printf("olaaa \n");
    }
  } */
  return 0;
}