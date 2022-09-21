let arr = [ 2, -3, 4, -6, 3, -7, 9, -1, 22 ];
let k = 3, res = [];

let negative = function FirstNegativeInSubArray(arr, k){
    let i = j = 0;
    while(j < arr.length){
        if(j-i+1 < k) j++;
        else if(j-i+1 == k){
            if(arr[i] < 0) res.push(arr[i]);
            else res.push(0);
            i++;
            j++
        }
    }
    return res.join(' ')
}

console.log(negative(arr, k));