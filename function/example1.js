//  Create a function that checks if the no.is even or odd

function isEvenOrOdd(a) {
    let number = a ;
    if(number %2 ==0){
        console.log( a+ " is even")
    }else{console.log(a+ " is odd")}
}

// isEvenOrOdd(3)

for (i=1;i<=50;i++){
    isEvenOrOdd(i)
}