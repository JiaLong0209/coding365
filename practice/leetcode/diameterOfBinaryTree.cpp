#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
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