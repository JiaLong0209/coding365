#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

//   Definition for a binary tree node.

class TreeNode {
    public:
        int val;
        TreeNode *left;
        TreeNode *right;
        TreeNode() : val(0), left(nullptr), right(nullptr){};
        TreeNode(int x) : val(x), left(nullptr), right(nullptr){};
        TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right){};
};

class Solution {
public: 
    int maxDepth(TreeNode* root){
        if(root == NULL) return 0;
        int left = maxDepth(root->left);
        int right =maxDepth(root->right);
        return left>=right? left+1 : right+1;
    }
    int diameterOfBinaryTree(TreeNode* root) {
        if(root == NULL) return 0; 
        int mid = maxDepth(root->left) + maxDepth(root->right);
        int left = diameterOfBinaryTree(root->left);
        int right = diameterOfBinaryTree(root->right);
        int max = mid;
        return left>mid? left : right > mid ? right : mid;
    }
};


class SolutionTwo {
public:
    void build(TreeNode* root,int dep,vector<int> &depth){
        if(root == NULL) return;
        if(dep <= depth.size()-1) depth[dep] += 1;
        else depth.push_back(1);
        build(root->left,dep+1,depth);
        build(root->right,dep+1,depth);
        return;
    }
    
    int maxDepth(TreeNode* root){
        vector<int> depth;
        if(root == NULL) return 0;
        depth.push_back(0);
        build(root,0,depth);
        return depth.size();
    }
};