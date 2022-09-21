let nums = [1,3,-1,-3,5,3,6,7];
let k = 3;

function slidingWindowMaximum(nums, k){
    let dQueue = [], res = [];
    let i = 0, j = 0;

    while(j < nums.length){
        while(dQueue.length > 0 && dQueue[dQueue.length-1] < nums[j]){
            dQueue.splice(-1);
        }
        dQueue.push(nums[j]);
        if(j+1-i < k) j++
        if(j+1-i === k){
            res.push(dQueue[0]);
            if(nums[i] === dQueue[0])
                dQueue.shift();
            i++;
        }
    }
    return res;
}

console.log(slidingWindowMaximum(nums,k));