#include<stdio.h>
#include<stdlib.h>   // rand()
#include<time.h>     // time()
#include<string.h>

// Big-O Time Complexity and Algorithm

// void f4(int n){             // O(n^2)
//     int  i,j;
//     for(i=0;i<n;i++){       //n t
//         printf("%d\t",i);
//     }
//     printf("\n\n");         //1 t
//     for(i=0;i<n;i++){       //n^2 t
//         for(j=0;j<n;j++){
//             printf("%d%d\t",i,j);

//         }
//         printf("\n:");
//     }
// }

// void f5(int n, int m){              //O(m*n)
//     int i,j;
//     for(i=0;i<n;i++){               //n t
//         for(j=0;j<m;j++){
//             printf("%d%d\t",i,j);   //m t
//         }
//         printf("\n");
//     }
// }

    //Stack
// #define size 10
// int S[size];
// int top = -1;

// int empty(){
//     // if(top == -1){
//     //     printf("stack is empty\n");
//     //     return 1;

//     // }
//     // else{
//     //     return 0;
//     // }
//     return top == -1;
// }
// int full(){
//     // if(top == size -1){
//     //     printf("stack is full \n");
//     //     return 1;
//     // }
//     // else{
//     //     return 0;
//     // }
//     return top == size -1;
// }

// void push(int x){
//     if(full()){
//         printf("stack is full(exit)\n");
//         exit(1);
//     }
//     else{
//         top += 1;
//         S[top] = x;
//         return;
//     }
// }
// int pop(){
//     if(empty()){
//         printf("stack is empty (exit)\n");
//         exit(2);
//     }
//     else{
//         top -= 1;
//         return S[top+1];
//     }
// }
// int main(){
//     printf("(1) please key in numbers  to stack (0 == end) \n");
//     int num;
//     while(1){
//         printf("add a number to stack:");
//         scanf("%d",&num);
//         if(num == 0){
//             break;
//         }
//         else{
//             push(num);
//         }
//     }
//     printf("print top to bottom stack\n");
//     while(!empty()){
//         printf("[%2d]",top);
//         printf("%d\n",pop());

//     }
//     return 0;
// }

    // queue
// #define MAX_SIZE 100

// int emptyq(int front, int rear){
//     return front == rear;
// }

// int fullq(int front, int rear){
//     return front == (rear+1)%MAX_SIZE;
// }

// void addq(int *p, int *front, int *rear, int x){
//     if(fullq(*front,*rear)){
//         printf("Queue is full");
//         exit(1);
//     }else{
//         *rear = (*rear+1)%MAX_SIZE;
//         p[*rear] = x;
//     }
// }

// int deleteq(int *p, int *front, int *rear){
//     if(emptyq(*front,*rear)){
//         printf("Queue is empty.");
//         exit(1);

//     }
//     *front = (*front+1)%MAX_SIZE;
//     return p[*front];
// }

// int main(){
//     // Q1 queue
//     int Q1[MAX_SIZE];
//     int Q1front = -1, Q1rear = -1;

//     // Q2 queue
//     int Q2[MAX_SIZE];   //temp queue
//     int Q2front = -1, Q2rear = -1;

//     printf("Add 10 random numbers into queue \n");
//     int i;
//     srand(time(NULL));
//     // for (i=0;i<10;i++){
//     //     addq(Q1,&Q1front, &Q1rear,rand());
//     // }
//     for(i = 0; i< 10; i++){
//         addq(Q1,&Q1front,&Q1rear,i);
//     }

//     // Problem 1.
//     printf("(1)Print all element from front to rear \n");
//     int x;
//     while(!emptyq(Q1front, Q1rear)){
//         printf("%d\n",x = deleteq(Q1,&Q1front,&Q1rear));
//         addq(Q2,&Q2front, &Q2rear,x);
//     }
//     while(!emptyq(Q2front, Q2rear)){
//         addq(Q1,&Q1front, &Q1rear,deleteq(Q2,&Q2front, &Q2rear));
//     }
//     printf("\n");

//     // Problem 2.
//     int X;
//     printf("(2)Print the sixth element \n");
//     for(i = 0; i <= 5; i++){
//         if(emptyq(Q1front, Q1rear)){
//             printf("Queue has only %d element",i);
//             exit(5);
//         }
//         addq(Q2,&Q2front, &Q2rear,X=deleteq(Q1,&Q1front, &Q1rear));
//     }
//     while(!emptyq(Q1front, Q1rear)){
//         addq(Q2,&Q2front, &Q2rear, deleteq(Q1,&Q1front,&Q1rear));
//     }
//     while(!emptyq(Q2front, Q2rear)){
//         addq(Q1,&Q1front, &Q1rear, deleteq(Q2,&Q2front,&Q2rear));
//     }
//     printf("The sixth element = %d \n\n",X);

//     return 0;
// }

//Linked lists
    //The amount of data cannot be expected
    //Need to add or delete data frequently
    //No need to frequently query and retrieve data

// struct Person {
//     int age;
//     char *name;
// };

// int main(void){
//     struct Person p;
//     struct Person *ptr;

//     p.name = "Kano";
//     p.age = 35;

//     ptr = &p;

//     printf("Name: %s\n",p.name);
//     printf("Age: %d\n",p.age);
//     printf("Name: %s\n",ptr->name);
//     printf("Age: %d\n",ptr->age);
//     return 0;
// }


// typedef struct Books
// {
//    char  title[50];
//    char  author[50];
//    char  subject[100];
//    int   book_id;
// } Book;
 
// int main( )
// {
//    Book book;
 
//    strcpy( book.title, "C");
//    strcpy( book.author, "Kano"); 
//    strcpy( book.subject, "Programming Langauge");
//    book.book_id = 12345;
 
//    printf( "Title : %s\n", book.title);
//    printf( "Author : %s\n", book.author);
//    printf( "Subject : %s\n", book.subject);
//    printf( "Book ID : %d\n", book.book_id);
 
//    return 0;
// }

typedef struct ListNode* NodeP;
struct ListNode{
    int data;
    NodeP link;
};
void printlist(NodeP first){
    NodeP temp = first;
    int i = 0;
    if(temp == NULL){
        printf("The list is empty\n");
        return;
    }
    printf("The list is: \n");
    while(temp!=NULL){
        printf("[%d]%d\t",i+1,temp->data);
        temp = temp->link;
        i++;
        if(i%10==0){
            printf("\n");
        }
    // printf("\n");
    }
    printf("\n");
}
// int main(){
//     printf("Creat a two-node list.\n");
//     NodeP first, second, third;
//     first = (NodeP)malloc(sizeof(struct ListNode));
//     first->data = 20;
//     second = (NodeP)malloc(sizeof(struct ListNode));
//     second->data = 30;
//     third = (NodeP)malloc(sizeof(struct ListNode));
//     third->data = 40;

//     first->link = second;
//     second->link = third;
//     third->link = NULL;

//     printlist(first);
//     return 0;
// }

// int main(){
//     printf("Input N numbers to create a list. \n");
//     int nums;
//     printf("How many data? ");
//     scanf("%d",&nums);

    // NodeP head, tail, p;
    // head = (NodeP)malloc(sizeof(struct ListNode));
    // tail = head;
    // for(int i = 0; i < nums; i++){
    //     tail->link = (NodeP)malloc(sizeof(struct ListNode));
    //     tail = tail->link;
    //     scanf("%d",&tail->data);
    // }
    // tail->link = NULL;
    // p = head;
    // head = head -> link;
    // free(p);

    // printlist(head);
    // return 0;
// }

// int main(){

//     NodeP head, tail, p;
//     head = (NodeP)malloc(sizeof(struct ListNode));
//     tail = head;
//     for(int i = 1; i <= 5; i++){
//         tail->link = (NodeP)malloc(sizeof(struct ListNode));
//         tail = tail->link;
//         tail->data = i;
//     }
//     tail->link = NULL;
//     p = head;
//     head = head -> link;
//     free(p);
//     printlist(head);


//     printf("Q1:Insert data 10 at the beginning of the list \n");
//     NodeP data10 =(NodeP)malloc(sizeof(struct ListNode));
//     data10->data = 10;

//     data10->link = head;
//     head = data10;

//     printlist(head);
//     printf("\n");

//     printf("Q2:Insert data 30 after the thrid node in the list \n");
//     NodeP data30 = (NodeP)malloc(sizeof(struct ListNode));
//     data30->data = 30;

//     NodeP count = head;
//     if(count == NULL){
//         printf("No node\n");
//         exit(1);
//     }
//     for(int i=1;i<3;i++){
//         count = count -> link;
//         if(count == NULL){
//             printf("Only %d node \n",i);
//             exit(2);
//         }
//     }
//     data30->link = count->link;
//     count->link = data30;
//     printlist(head);
//     printf("\n");

//     printf("Q3:Delete and print the first node in list \n ");
//     NodeP temp;
//     temp = head;
//     head = head->link;
//     printf("The first node is : %d",temp->data);
//     free(temp);
//     printlist(head);
//     printf("\n");


//     printf("Q4:Delete and print the fourth node in the list \n ");
//     printf("Means: Delete and print the node after third \n");
//     temp = head;
//     NodeP beforeTemp = head;
//     if(temp == NULL){
//         printf("No node \n");
//         exit(3);
//     }
//     for(int i = 1; i<4; i++){
//         beforeTemp = temp;
//         temp = temp->link;
//         if(temp == NULL){
//             printf("Only %d node \n",i);
//             exit(4);
//         }
//     }
//     beforeTemp->link = temp->link;
//     printf("The fourth node is : %d \n",temp->data);
//     free(temp);
//     printlist(head);
//     return 0;
// }

int main(){
    int n = 5;
    NodeP head, tail ,p;
    head = (NodeP)malloc(sizeof(struct ListNode));
    tail = head;
    for(int i=1; i<=n; i++){
        tail->link = (NodeP)malloc(sizeof(struct ListNode));
        tail = tail->link;
        tail->data = i;
    }
    tail->link = NULL;
    p = head;
    head = head->link;
    free(p);
    printlist(head);
    printf("\n");
    
    printf("Q1Print the first node\n");
    NodeP firstNode;
    firstNode = head;
    printf("The fist node is: %d \n\n",firstNode->data);

    printf("Q2:Move the first node to the end of the list \n");
    
    tail->link = head;
    head = head->link;
    tail->link->link = NULL;
    printlist(head);
    return 0;
}

