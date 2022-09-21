let arr = [-5,8,-14,2,4,12];
let  k = -5;

const largestSubArray = (a, k)=>{
    let max = sum = i = j = 0;
    while(j < a.length){
        sum += a[j];
        if(sum < k) j++;
        else if(sum === k){
            max = Math.max(max, j+1-i);  //?to get largest subarray length for sum equals 'K
            j++;
        }
        else{
            while(sum > k && i< j){
                sum -= a[i];
                i++;
            }
            if(sum === k){
                max = Math.max(max, j+1-i);
            }
            j++;
        }
    }
    return max;
}

console.log(largestSubArray(arr, k));