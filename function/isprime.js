// find wether a number is prime or not

function isPrime(x){
    for(i=2 ; i<=x-1;i+=1){
        if(x%i==0){
        return false;
    }
    }
    return true;
    
}
console.log(isPrime(47))