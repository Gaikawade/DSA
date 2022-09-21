//Maximum and minimum sum of subarray elements

let arr = [ 2, 3, 4, 6, 3, 7, 9, 1, 22 ];
let k = 3;

function window(arr, k){
let max = sum = i = j = 0;
    while(j < arr.length) {
        sum = sum + arr[j];
        if(j - i + 1 < k) j++;
        else if(j - i + 1 == k){
            max = Math.max(max, sum);
            sum -= arr[i];
            i++;
            j++;
        }
    }
    return max;
}

console.log(window(arr, k))