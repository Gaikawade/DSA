/*
!Selection Sort
The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning. 

The algorithm maintains two subarrays in a given array.

1. The subarray which already sorted. 
2. The remaining subarray was unsorted.
In every iteration of the selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 
*/

const selectionSort = (arr) => {
    let i=0, j=0, midInd=0;
    for(i=0; i<arr.length-1; i++){
        midInd = i;
        for(j=i+1; j<arr.length; j++){
            if(arr[j] < arr[midInd])
                midInd = j;
            [arr[i], arr[midInd]] = [arr[midInd], arr[i]];
        }
    }
    return arr;
}

let arr = [5, 1, 8, 4, 6, 3, 2, 1,]
console.log(selectionSort(arr));