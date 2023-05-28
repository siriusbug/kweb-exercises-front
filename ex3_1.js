function isValidNumber(num){
    for(let i=1; i<10; i++){
        if(num == i){
            return true;
        }
    }
    return false;
}

console.log(isValidNumber(9))
console.log(isValidNumber('4'))
console.log(isValidNumber('abc'))
console.log(isValidNumber(-5))
console.log(isValidNumber(3.5))
console.log(isValidNumber(3/0))