// https://zerojudge.tw/ShowProblem?problemid=f579
#include <stdio.h>
int main(){
    int a,b,n,t,count=0;
    scanf("%d %d %d", &a,&b,&n);
    for(int i=n, x=0, y=0; i; i--){
        while(scanf("%d", &t) && t != 0) x = -t==a ? 0 : t==a ? 1 : y, y = -t==b ? 0 : t==b ? 1 : y;
        count += x && y ? 1 : 0;
    }
    printf("%d \n", count/2);
    return 0;
}

