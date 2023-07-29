// Question 1: {1,2,3,4}
// Question 2: "ref"
// Question 3: 0: {Array(3) => true} 1: {Array(3) => false}

const hasDuplicate = arr => new Set(arr).size !== arr.length;

function isVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
    const map = new Map();

    for (let char of str){
        let lChar = char.toLowerCase();
        if (isVowel(lChar)){
            if (map.has(lChar)){
                map.set(lChar, map.get(lChar) + 1);
            }
            else{
                map.set(lChar, 1);
            }
        }
    }
    return map;
}
