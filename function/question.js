// function sumOfNum(a,b){
//     num = a+b;
//     return num;
// }

// console.log(sumOfNum(4,10))


// function checkIf(a){
//     if(a%2==0){
//         return a+" is even";
//     }else{
//         return a+" is odd";
//     }
// }


// console.log(checkIf(10))

// for (a=1; a<=50;a++){
//     console.log(checkIf(a))
// }

 
function isPrime(num){
    for(i =2 ; i<=num-1; i++){
        if(num%i==0){
            return "not prime"
        }
    } return "prime"
}

console.log(isPrime(47))