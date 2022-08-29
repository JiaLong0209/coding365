#include <stdlib.h>
#include <stdio.h>
#include <string.h>


typedef struct stu_grad_inof{
    double math;
    double chinese;
    double eng;

}tStuGrdInfo;

// The linked list data type definition

typedef struct node{
    int id;
    char* name;
    tStuGrdInfo* stu_grad_info_ptr;
    struct node* next;
    struct node* prev;

}tNode;


typedef struct linked_list_head{
    tNode* head;
    tNode* tail;
    int counts;

}tLinkedListHead;


//The function initial definition
void init_linked_list(tLinkedListHead* list);
void add_a_stu_data(tLinkedListHead* list, int id, char* name, tStuGrdInfo* stu_grad_info);
void delete_a_stu_data(tLinkedListHead* list, char* stu_name);
tNode* find_a_stu_data(tLinkedListHead* list, char* stu_name);
void display_a_stu_info(tLinkedListHead* list, char* stu_name);
void display_all_stu_info(tLinkedListHead* list);
void init_stu_data(char** stu_name_ptr, tStuGrdInfo** stu_grad_info_ptr_ptr);


void init_linked_list(tLinkedListHead* list){
    list->head = NULL;
    list->tail = NULL;
    list->counts = 0;
}

void add_a_stu_data(tLinkedListHead* list, int id,
                    char* name, tStuGrdInfo* stu_grad_info){
                        
    tNode* new_node = (tNode*) malloc(sizeof(tNode));
    new_node->id = id;
    
    new_node->name = name;

    new_node->stu_grad_info_ptr = stu_grad_info;

    if(list->counts == 0){
        list->head = new_node;
        list->tail = new_node;
        list->head->prev = NULL;
        list->head->next = NULL;
    }else{
        new_node->prev = NULL;
        new_node->next = list->head;
        list->head->prev = new_node;
        list->head = new_node;
    }
    printf("[ADD] sucessful!\n\n");
    list->counts++;
}

void delete_a_stu_data(tLinkedListHead* list, char* stu_name){
    if(list->counts == 0){
        printf("The database is emtpy");
        return;

    }
    tNode* node_temp = list->head;
    if(list->counts == 1 && !strcmp(node_temp->name,stu_name)){    // if string is same, strcmp return 0, so we need to add '!'
        list->head = NULL;
        list->tail = NULL;
        list->counts--;
        free(node_temp);
        printf("[DELETE] sucessful !\n\n\n");
        return;
    }

    while(node_temp != NULL){
        if(!strcmp(node_temp->name,stu_name)){
            if(node_temp->prev != NULL && node_temp->next != NULL){
                node_temp->prev->next = node_temp->next;    // head -> delete -> tail
                                                            // head -----------> tail
                                                            
                node_temp->next->prev = node_temp->prev;    // head <- delete <- tail
                                                            // head <----------- tail
                list->counts--;
                free(node_temp);
                printf("[DELETE] successful! \n\n");
                return;
            
            }else{
                node_temp->prev->next = NULL;   // head -> tail
                                                // head ---------> NULL
                list->tail = node_temp->prev;   
                list->counts--;
                free(node_temp);
                printf("[DELETE] successful \n\n");
                return;
            }
        }
        node_temp = node_temp->next;

    }

    printf("Can't find student: ");
    for(int i = 0; i < strlen(stu_name); i++){
        printf("%c", *(stu_name+i));
    }
    printf("!\n");
}



void init_stu_data(char** stu_name_ptr, tStuGrdInfo** stu_grad_info_ptr_ptr){
    *stu_name_ptr = malloc(sizeof(char)*100);
    *stu_grad_info_ptr_ptr = malloc(sizeof(tStuGrdInfo));
}


int main(){
    tLinkedListHead* list = (tLinkedListHead*) malloc(sizeof(tLinkedListHead));
    init_linked_list(list);

    char choice = '0';  // a char  use ' '
    int id;
    char *stu_name;   //string use  " ",need to add a star
    tStuGrdInfo* stu_grad_info_ptr;

    while(choice != '5'){

        printf("\n\n(1) Add a student data.\n");
        printf("(2) Delete a student data.\n");
        printf("(3) Display a studenet data.\n");
        printf("(4) Display all student data.\n"); 
        printf("(5) Exit. \n");
        printf("Please enter a number : ");

        scanf(" %c",&choice);
        // init_stu_data()

        init_stu_data(&stu_name,&stu_grad_info_ptr);

        if(choice == '1'){

            printf("Please enter student name : ");
            scanf("%s",stu_name);
            printf("Please enter student ID : ");
            scanf("%d",&id);

            printf("Please enter math grade : ");
            scanf("%lf",&(stu_grad_info_ptr->math));
            printf("Please enter chinese grade : ");
            scanf("%lf",&(stu_grad_info_ptr->chinese));
            printf("Please enter english grade : ");
            scanf("%lf",&(stu_grad_info_ptr->eng));

            add_a_stu_data(list,id,stu_name,stu_grad_info_ptr);
        }
        else if(choice == '2'){
            printf("Please enter sutdent name: ");
            scanf("%s",stu_name);
            delete_a_stu_data(list,stu_name);
        }

    }


}
