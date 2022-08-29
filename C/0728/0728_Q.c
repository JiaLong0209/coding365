#include<stdio.h>
#include<stdlib.h>
#define N 8
int arr[N+1] = {0,2,8,7,3,6,4,1,5};

typedef struct stack_node{  //tStackNode
    int p;
    int q;
    struct stack_node* next;

}tStackNode;

typedef struct StackHead{   //tStackHead
    tStackNode* head;
    int count;
}tStackHead;

tStackHead* CreateStack(){
    tStackHead* stack = (tStackHead*) malloc(sizeof(tStackHead));
    stack->count = 0;
    stack->head = NULL;
    return stack;
}
void push_stack(tStackHead* stack,int p,int q){
    tStackNode* new_data = (tStackNode*) malloc(sizeof(tStackNode));
    new_data->p = p;
    new_data->q = q;

    if(stack->count == 0){
        new_data->next = NULL;
        stack->head = new_data;
    }
    else{
        tStackNode* cur_node = stack->head;  // first 
        for(int i = 0;i<stack->count-1;i++){
            cur_node = cur_node->next;       // update cur_node
        }
        new_data->next = NULL;              // head ---> cur_node ---> new_data
        cur_node->next = new_data;
    }
    stack->count += 1;
}
void pop_stack(tStackHead* stack,int* p,int* q){
    tStackNode* cur_node = stack->head;
    if(stack->count == 0){
        return; //stack is empty
    }
    *p = cur_node->p;
    *q = cur_node->q;
    stack->head = cur_node->next;
    stack->count--;
    //del cur_node;
}

void print_stack(tStackHead* stack){
    tStackNode* curr_node = stack->head;
    while(curr_node != NULL){
        printf("\n p = %d , q = %d\n",curr_node->p,curr_node->q);
        curr_node = curr_node->next;
    }
}
void Interchange(int* arr,int i,int j){
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
}
// int Partition(int* arr,int m,int p){
int Partition(tStackHead* stack, int m, int p){
    // your code
    // ----
    // int i,j;
    // int std = arr[m];
    // int std = stack->head;
    // i = m;
    // j = p;
    // while(i > j){
    //     do{
    //         i++;
    //     }while(arr[i] < std);
        
    //     do{
    //         j--;
    //     }while(arr[j] > std);
        
    //     if(i < j){
    //         Interchange(arr,i,j);
    //     }
    // }
    // arr[m] = arr[j];
    // arr[j] = std;
    // return j;
}
void QuickSort2(tStackHead* stack, int p,int q){
    int j;
    int times = 0;
    while(1){
    // your code

    // j = Partition(stack,p,q+1);
    // QuickSort2(stack,p,j-1);
    // QuickSort2(stack,j+1,p);
    // return;
    // -----
    }
}
int main(){
    tStackHead* stack = CreateStack();
    for(int i =1;i<=N;i++){
        printf("%d ",arr[i]);
    }
    printf("\n");
    // QuickSort2(stack,1,N);

    for(int i =1;i<=N;i++){
        printf("%d ",arr[i]);
    }
    printf("\n");
}