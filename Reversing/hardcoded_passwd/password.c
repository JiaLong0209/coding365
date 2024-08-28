#include <stdio.h>
#include <string.h>

int main(){
    char passwd[] = "supersecret123";
    char input[50];
    
    printf("Enter the password: ");
    scanf("%49s", input);

    if(strcmp(input, passwd) == 0){
        printf("Password is correct!\n");
    }else{
        printf("Incorrect password!\n");
    }
    return 0;
}

