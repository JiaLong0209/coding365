#include <stdio.h>
#include <string.h>

int main(){
    int password = 1234;
    int input;
    
    printf("Enter the password: ");
    scanf("%d", &input);

    if(password == input){
        printf("Password is correct!\n");
    }else{
        printf("Incorrect password!\n");
    }
    return 0;
}
/*037E3A*/
