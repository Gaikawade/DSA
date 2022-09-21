let a = 'ADOBECODEBANC', t = 'ABC';

const minimumWindowSubString = (s, t) => {
    let ans = '', min = Infinity;
    let map = new Map();

    for(let i=0; i<t.length; i++){
        map.set(t[i], (map.get(t[i]) || 0) +1);
    }

    let i=0, j=0, count = map.size;
    while(j < s.length){
        if(map.has(s[j])){
            map.set(s[j], map.get(s[j]) - 1);
            if(map.get(s[j]) === 0) count--;
        }

        while(count === 0){
            if(min > j+1-i){
                min = Math.min(min, j+1-i);
                ans = s.slice(i, j+1);//? haven't increment 'j' yet
            }
            if(map.has(s[i])){
                map.set(s[i], map.get(s[i])+1);
                if(map.get(s[i]) === 1) count++;
            }
            i++;
        }
        j++;
    }
    return ans;
    //return s.slice(i-1, j);
}

console.log(minWindow(a, t));
