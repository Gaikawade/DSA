let str = 'eceba', k = 2;

function longestSubstring(s, k){
    let i = 0, j = 0, max = 0;
    let map = new Map();
    
    while(j < s.length){
        map.set(s[j], (map.get(s[j]) || 0) + 1);
        if(map.size < k){
            j++;
        }
        else if(map.size === k){
            max = Math.max(max, j+1-i);
            j++;
        }
        else{
            while(map.size > k){
                map.set(s[i], map.get(s[i])-1);
                if(map.get(s[i]) === 0){
                    map.delete(s[i]);
                }
                i++;
            }
            j++;
        }
    }
    return max>0 ? max : -1;
}

console.log(longestSubstring(str, k));