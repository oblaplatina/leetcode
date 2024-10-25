function twoSum(nums, target) {
    const seenNumbers = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seenNumbers[complement] !== undefined) {
            return [seenNumbers[complement], i];
        }
        seenNumbers[nums[i]] = i;
    }
}
const nums = [3,2,4];
const target = 6;
console.log(twoSum(nums, target));