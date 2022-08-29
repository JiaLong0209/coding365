#include <sys/types.h>
#include <sys/wait.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

// int main(){
//     pid_t pid;
//     pid = fork(); //fork a child process
//     if(pid < 0){  //error occurred
//         fprintf(stderr, "Fork Failed");
//         return 1;
//     }
//     else if(pid == 0){
//         execlp("/bin/ls","ls",NULL);

//     }
//     else{
//         wait(NULL);
//         printf("Child complete \n");

//     }
//     return 0;
// }


int main(){
    pid_t pid;
    int status,i;
    if(fork() == 0){
        printf("\n Child process pid = %d/n", getpid());
        exit(5);
    }
    else{
        sleep(1);
        printf("Parent process, wait for child... \n");
        pid = wait(&status);
        i = WEXITSTATUS(status);
        printf("child's pid = %d . exit status = %d \n ", pid, i);
    }
    return 0;
}

// Process operation related command

// sleep 5 
// sleep 5 & // run in background
// fg  // foreground
// jobs // Call the program back to the foreground
// Ctrl + z //stop
// Ctrl + c // 


// ps -aux

// kill 3858(PID)   ,if the process was stoped, need wait it is running

// nohup (no hang up)

//free  //view memory usage RAM
//free -h //human
