
myApp: myApp.c
	gcc myApp.c -o myApp

client: client.c
	gcc client.c -o client

server: server.c
	gcc server.c -o server
 

application: application.c
	gcc application.c -o application


matrix_opt: matrix_opt.c
	gcc -fopenmp matrix_opt.c -o matrix_opt


matrix: matrix.c
	gcc -lm -Wall -fopenmp matrix.c -o matrix


openmp: openmp.c
	gcc -lm -Wall -fopenmp openmp.c -o openmp


pthread_2: pthread_2.c
	gcc pthread_2.c -lpthread -o pthread_2 


pthread_1: pthread_1.c
	gcc -lm -Wall -pthread pthread_1.c -o pthread_1 
