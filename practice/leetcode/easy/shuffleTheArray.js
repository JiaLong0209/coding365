// https://leetcode.com/problems/shuffle-the-array/
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */


 var shuffle = (nums, n) => {
    return nums.map((value,index)=> index % 2 == 0 ? nums[index/2] : nums[Math.floor(n+index/2)]);
}


 var shuffle = (arr, n) =>  arr.map((v,i) => !(i&1) ? arr[i/2] : arr[~~(n+i/2)]);
