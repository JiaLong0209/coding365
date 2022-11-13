#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

class TreeNode{
    public:
        TreeNode(){

        }
        ~TreeNode(){

        }
        TreeNode* left;
        TreeNode* right;
        int val;

};

class Solution {
public:
    int has;
    void find(TreeNode* root,int targetSum,int sum){
        if(root== NULL) return;
        if(!root->left && !root->right){
            if(sum+root->val == targetSum){
                has = 1;
                return;
            }
        } 
        find(root->left,targetSum,sum + root->val);
        find(root->right, targetSum,sum + root->val);
        return;
    }
    bool hasPathSum(TreeNode* root, int targetSum) {
        has = 0;
        find(root,targetSum, 0);
        return has;
    }
};