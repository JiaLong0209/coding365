#include<stdio.h>
#include<stdlib.h>


// Tree, binary tree
    //Degree
    //Left , Terminal
    //Nonterminal Node
    //Child and Parent
    //Sibling
    //Ancestors
    //Level
    //Degree of Tree
    //Height or Depth
    //Forest

    //binary tree 
        //Skewed Binary Tree
        //Full Binary Tree
        //Complete Binary Tree

//Tree travsal

    //LDR left d right
    //



typedef struct node{
    int item;
    struct node* left;
    struct node* right;
}tNode;

tNode* createNode(int value){
    tNode* newNode = (tNode*)malloc(sizeof(tNode));
    newNode->item = value;
    newNode->left = NULL;
    newNode->right = NULL;

    return newNode;
}

tNode* insertLeft(tNode* root, int value){
    root->left = createNode(value);
    return root->left;
}

tNode* insertRight(tNode* root, int value){
    root->right = createNode(value);
    return root->right;
}

// LDR

void inorderTraversal(tNode* root){
    if (root == NULL) return;
    inorderTraversal(root->left);   //left
    printf("%d ->", root->item);    //data
    inorderTraversal(root->right);  //right
}

// DLR

void preorderTraversal(tNode* root){
    if(root == NULL) return;
    printf("%d ->",root->item);
    preorderTraversal(root->left);
    preorderTraversal(root->right);
}

// LRD

void postorderTraversal(tNode* root){
    if(root == NULL) return;
    postorderTraversal(root->left);
    postorderTraversal(root->right);
    printf("%d ->",root->item);
}


// int main(void){
    
//     // problem 1.
//     // tNode* root = createNode(1);
//     // insertLeft(root,2);
//     // insertRight(root,3);
//     // insertLeft(root->left,4);
//     // insertRight(root->left,5);
//     // printf("Inorder Traversal\n");
//     // inorderTraversal(root);

//     // printf("\nPreorder Traversal\n");
//     // preorderTraversal(root);

//     //problem 2.

//     tNode* root = createNode(1);
//     insertLeft(root,2);
//     insertRight(root,3);
//     insertLeft(root->left,4);
//     insertRight(root->left,5);
//     insertLeft(root->left->right,7);
//     insertRight(root->left->right,8);

//     insertRight(root->right,6);
//     insertRight(root->right->right,9);

//     printf("Postorder Traversal\n");
//     postorderTraversal(root);

//     return 0;
// }




#define SIZE 16
void CreateTree(int *tree ,int *data, int n){
    int i, loc;
    tree[0] = data[0];
    tree[1] = data[1];
    // your code

    for(i = 2; i <= n; i++){
        loc = 1;
        while (tree[loc] != 0){
            if(data[i] > tree[loc]){
                loc = loc *2 +1;
                // tree[i] == data[i];
            }else if(data[i] < tree[loc]){
                loc = loc *2;
                // tree[i] == data[i];
            }
        }
        tree[loc] = data[i];
    }

    // teacher code
    // for(i=2; i<=n; i++){

    //     loc = 1;
    //     while(tree[loc] != 0){
    //         if(data[i] < tree[loc]){
    //             loc += loc;
    //         }
    //         else{
    //             loc += (loc+1);
    //         }
    //     }
    //     tree[loc] = data[i];
    // }

}

int search_k(int *tree, int *leftsize, int rank_k){
    int found = 0, loc = 1;
    // int t = 0;
    // your code
    while(found != 1 && tree[loc] != 0){
        if(rank_k == leftsize[loc]){ // || t == rank_k
            found = 1;
        }else if(rank_k < leftsize[loc]){
            loc += loc;
        }else{
            rank_k = rank_k - leftsize[loc];
            loc += loc+1;
        } 
        // t += leftsize[loc];
    }
    //----------
    if(found == 0){
        return 0;
    }else{
        return loc;
    }
}

    // practice 1. built a binary tree
// int main(){

//     int data[] = {0, 15, 6, 24, 18, 12, 3, 7, 1, 4, 17};
//     int tree[SIZE] = {0};

//     CreateTree(tree, data, 10);
//     printf("[");
//     for (int i = 0; i<SIZE; i++){
//         printf("%d, ",tree[i]);
//     }
//     printf("]\n");
//     return 0;
// }


    //practice 2. find search value
int main(void){
    
    int data[] = {0, 15, 6, 24, 18, 12, 3, 7, 1, 4, 17};
    int leftsize[] = {0,7,4,3,2,2,2,0,1,1,1,0,1,0,0,0};
    int tree[SIZE] = {0};
    int rank_k = 6;
    CreateTree(tree, data, 10);
    printf("[");
    for (int i = 0; i<SIZE; i++){
        printf("%d, ",tree[i]);
    }
    printf("]\n");
    int loc = search_k(tree,leftsize,rank_k);
    printf("Smallest rank %d is : %d\n",rank_k,tree[loc]);
    return 0;
}
