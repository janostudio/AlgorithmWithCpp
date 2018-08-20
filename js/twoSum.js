
// 迭代 3.307ms
var twoSumD = function(nums, target, a) {
    let c = a || 0;
    if(target >= nums[c]){
        for (var i = c + 1; i < nums.length; i++) {
            if ((target - nums[c]) === nums[i]){
                return [c, i];
            }
        }
    }
    if(c < nums.length) return twoSumD(nums, target, ++c);
};

// 循环 3.019ms 
var twoSumF = function(nums, target) {
    var length = nums.length;
    for(var i = 0; i < length; i++) {
        for(var j = i + 1; j < length; j++) {
            if ((target - nums[i]) === nums[j]) {
                return [i, j];
            }
        }
    }
    return 'no numbers';
};

// 两遍哈希表 2.940ms（不用map，用{}则需要将key转成number）
var twoSumM = function(nums, target) {
    const map = new Map();
    for(var i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for(var j = 0; j < nums.length; j++) {
        const rest = target - nums[j];
        const restIndex = map.get(rest);
        if(restIndex && restIndex !== j) return [j, restIndex]
    }
    return 'no numbers';
};

// 一遍哈希表 2.912ms
var twoSumP = function(nums, target) {
    const map = new Map();
    for(var i = 0; i < nums.length; i++) {
        const rest = target - nums[i];
        const restIndex = map.get(rest);
        if(restIndex !== undefined) return [i, restIndex]
        map.set(nums[i], i);
    }
    return 'no numbers';
};

console.time('test');
// [0,4,3,0] 0 D
console.log(twoSumD([2,7,11,15], 9));
console.timeEnd('test');

/*
 * 递归调试复杂，速度相对而言慢一些，而且容易忘记return
 * 可以提高空间的复杂度提升速度
 */
   