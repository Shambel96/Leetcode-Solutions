const nums = [3, 5, 6, 7, 8, 80];
var twoSum = function(nums, target) {
    const indices =[];
   for (let i = 0; i < nums.length; i++) {
   for (let j = 0; j < nums.length; j++){
    if (i === j){
        continue;
    } 
    
    if(nums[i] + nums[j] === target){
           indices.push(i, j);
return indices;
    } 
   }
   }
           return `No answer match with your target`;

};

twoSum(nums, 87);