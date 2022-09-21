/*
! Bubble Sort
Bubble sort is the simplest sorting algorithm that works by repeatedly applying swapping the adjacent elements if they are in wrong order. This algorithm is not suitable for large data sets as its average and wrost-case time complexity is quite high.
! Approach
Input: arr[] = {5, 1, 4, 2, 8}

*First Pass:
Bubble sort starts with very first two elements, comparing them to check which one is greater.
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. 
( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
*Second Pass:
Now, during second iteration it should look like this:
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) 
( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) 
*Third Pass: 
Now, the array is already sorted, but our algorithm does not know if it is completed.
The algorithm needs one whole pass without any swap to know it is sorted.
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
*/

//?Code

let arr = [5, 1, 8, 4, 6, 3, 2, 1,];

function bubbleSort(a){
    let swap = true;
    while(swap){
        swap = false;
        for(let i = 0; i < arr.length; i++){
            if(a[i] > a[i+1]){
                [a[i], a[i+1]] = [a[i+1], a[i]];
                swap = true;
            }
        }
    }
    return a;
}

console.log(bubbleSort(arr));