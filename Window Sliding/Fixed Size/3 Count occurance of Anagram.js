let string = "forxxorfxdofr";
let ptr = "for";

const countAnagrams = (str, ptr)=>{
    let k = ptr.length;
    let map = new Map();

    //?Creating hashmap for pattern
    for(let i = 0; i < k; i++) {
        if(map.has(ptr[i]))
            map.set(ptr[i], map.get(ptr[i]+1));
        else
            map.set(ptr[i],1);
    }

    //?Performing Slinding Window Operation
    let i = 0;
    let j = 0;
    let count = map.size;
    let ans = 0;

    while(j < str.length){
        //?Computing j-th index of str
        if(map.has(str[j])){
            map.set(str[j], map.get(str[j])-1);
            if(map.get(str[j]) === 0){
                count--;
            }
        }

        //?Checking for window size
        if(j-i+1 < k){
            j++;
        } else if(j-i+1 === k){
            //?After hitting the window size again computing for i-th index of str
            if(count === 0) ans++;
            if(map.has(str[i])){
                map.set(str[i], map.get(str[i])+1);
                if(map.get(str[i]) === 1){
                    count++;
                }
            }
            i++, j++;
        }
    }
    return ans;
}

console.log(countAnagrams(string, ptr));