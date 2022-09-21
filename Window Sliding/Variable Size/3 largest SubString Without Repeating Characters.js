let str = 'pwwkew';

let largestSubStringWithoutRepeatingCharacters = (s) => {
    let i = 0, j = 0, res = 0;
    let map = new Map();

    while(j < s.length) {
        map.set(s[j], (map.get(s[j]) || 0) + 1);
        if(map.size === j+1-i){
            res = Math.max(res, j+1-i);
            j++;
        }
        else{
            while(map.size < j+1-i){
                map.set(s[i], map.get(s[i])-1);
                if(map.get(s[i]) === 0){
                    map.delete(s[i]);
                }
                if(map.size === j+1-i)
                    res = Math.max(res, j+1-i)
                i++;
            }
            j++;
        }
    }
    return res > 0 ? s.slice(i,j) : -1;
}

console.log(largestSubStringWithoutRepeatingCharacters(str));

//!using Set()

const set = (s) => {
    let i = 0, j= 0, max = 0;
    let set = new Set();

    while(j< s.length){
        if(!set.has(s[j])){
            set.add(s[j]);
            j++;
            max = Math.max(max, set.size);
        }
        else{
            set.delete(s[i]);
            i++;
        }
    }
    return max > 0 ? s.slice(i, j) : -1;
}

console.log(set(str));