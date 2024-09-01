// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


const twoSum = (nums, target) => {
    let ans =[];
    for (let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                ans.push(i);
                ans.push(j);
            }
        }
    }
    return ans;
};


// ব্যবহারকারীর কাছ থেকে ইনপুট নিতে
let numsInput = prompt("Enter the numbers separated by commas (e.g., 2,7,11,15):");
let targetInput = prompt("Enter the target number:");

// ইনপুটগুলো প্রক্রিয়া করতে
let nums = numsInput.split(',').map(Number); // Comma দিয়ে আলাদা করা সংখ্যা গুলোকে একটি অ্যারেতে পরিণত করা
let target = parseInt(targetInput); // টার্গেট নম্বরকে পূর্ণসংখ্যায় রূপান্তর করা


// ফলাফল প্রদর্শন করা
let result = twoSum(nums, target);
console.log(`Indices: ${result}`);