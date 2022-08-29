#include<stdio.h>

void table(int a, int b, int aMax, int bMax){
printf("%d * %d = %d |",a,b,a*b);
if(a == aMax && b == bMax)
    printf("\n");
    return;
if(b < bMax){
    b++;
}else{
    b=1;
    a++;
    printf("\n");
}
table(a, b, aMax, bMax);
}

int main(){
    int multiplicand = 1;
    int multiplier = 1;
    int maxMultiplicand = 9;
    int maxMultiplier = 9;

    table(multiplicand, multiplier, maxMultiplicand, maxMultiplier);
}  