function getDivisors(num){
    arr = []
    for(let i=1; i<=Math.sqrt(num); i++){
        if(num%i===0){
            arr.push(i)
            arr.push(num/i)
        }
    }
    ans = arr.filter((v, i) => arr.indexOf(v)===i);
    ans.sort(function(a,b){
        if(a>b) return 1;
        if(a===b) return 0;
        if(a<b) return -1;
    })
    return ans
}

console.log(getDivisors(100))