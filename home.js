// Problem 1
function primeNum (num){
    let  isPrime = true ;
    if (num<=1){
        return isPrime = false
    }
    
    for (let i= 2;i<num;   i ++) {
 if (num% i===0){
    return isPrime =false
 }
    }
    return isPrime
}
console.log(primeNum(10));
