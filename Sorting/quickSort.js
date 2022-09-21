/*
! Quick Sort
Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 

Always pick the first element as a pivot.
Always pick the last element as a pivot (implemented below)
Pick a random element as a pivot.
Pick median as the pivot.
The key process in quickSort is a partition(). The target of partitions is, given an array and an element x of an array as the pivot, put x at its correct position in a sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.
*/

//!Code

// function quickSort(arr){
//     if(arr.length <= 1) return arr;
//     let pivot = arr[arr.length - 1];
//     let leftArr = [], rightArr = [];
    
//     for(let el of arr.slice(0, arr.length-1)){
//         el < pivot ? leftArr.push(el) : rightArr.push(el);
//     }

//     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }

let arr = [9, 0, 2, 100, 7, -2, 6, 1 ,-100];
// console.log(quickSort(arr));

let pivot = function(nums, left, right){
    let p = right;
    let j = left;
    let i = left-1;

    while(j <= p){
        if(nums[j] < nums[p]){
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        } else {
            j++;
        }
    }
    i++;
    [nums[i], nums[p]] = [nums[p], nums[i]];

    return i;
}

let sortArray = function(nums, left, right){
    if(left < right){
        let pIndex = pivot(nums, left, right);
        sortArray(nums, left, pIndex-1);
        sortArray(nums, pIndex+1, right);
    }
    return nums; 
}
arr = [4, 3, 6, 8, 9, 2, 1, 5, 7]
console.log(sortArray(arr, 0, arr.length-1));