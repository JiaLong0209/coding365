#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <pthread.h>

void f(char s[]){
    for(int i = 0; i<5; i++){
        printf("%s",s);
        sleep(rand()%3);
        // usleep(rand()%300000);
    }
}
void thread(void){
    f("The thread\n");

}
int main(){
    int p;
    time_t t;
    srand((unsigned) time(&t));
    pthread_t id;
    p = pthread_create(&id,NULL,(void*) thread, NULL);
    if(p!=0){
        printf("Create pthread error !\n");
        exit(1);
    }
    f("The main\n");
    pthread_join(id,NULL);  //avoid zombie process
    return 0;
}   