#include <vector>
#include <iostream>
#include <cmath>
#include <limits>
using namespace std;

class TreeNode{
    public:
        int val;
        TreeNode* left;
        TreeNode* right;
        TreeNode(){
        }
        ~TreeNode(){ 
        }
};

class Solution {
public:
    int max3(int a, int b, int c){
        return a>b ? a>c ? a : c : c > b ? c : b;  
    }
    int findMaxRoot(TreeNode* root){
        if(root == NULL) return 0;
        int left = findMaxRoot(root->left) + root->val;
        int right = findMaxRoot(root->right) + root->val;
        int result = 0;
        return max3(left,right,0);
    }
    int maxPathSum(TreeNode* root) {
        if(root == NULL) return -2e9;
        int mid = findMaxRoot(root->left) + root->val + findMaxRoot(root->right);
        int left = maxPathSum(root->left);
        int right = maxPathSum(root->right);
        
        
        return max3(mid,left,right);
    }
};