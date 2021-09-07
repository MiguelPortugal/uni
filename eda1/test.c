#include <stdio.h>
#include <wchar.h>
#include <locale.h>
 
#define MAXCHAR 1000
int main() {
    FILE *fp;
    char* filename = "teste.txt";
    wchar_t str[40] = L"";
    setlocale(LC_ALL,"");
 
    fp = fopen(filename, "r");
    if (fp == NULL){
        printf("Could not open file %s",filename);
        return 1;
    }
    
    fwscanf(fp, L"%ls\n", str);
    wprintf(L"%lc\n", str[1]);


    fclose(fp);
    return 0;
}