/* Function that calculates a factorial */
function factorial (x){
    let y=1
    for (let i = 1; i <= x; i++) {
        y = y * i
    }
    return y
}

/* Function that calculates the Euler number considering 100 interactions*/
let resultEuler = euler (100)
console.log(resultEuler)

function euler (x){
    let y = 1
    for (let i = 1; i <= x; i++) {
        y = y + (1/(factorial(i)))
    }
    return y
}

/* Function that finds prime numbers between 0 and 100,000 */
let resultPrime = [];
console.log(`The prime numbers between 0 and 100,000 are:`)
console.log(resultPrime)

for(i=2; i<100; i++){
    if (prime(i) == true){
        resultPrime.push(i)
    }
}

function prime(num){
    for (j = 2; j < num; j++) {
        if (num % j == 0){
            return false;  
        } 
    }
    return true;
}

/* Function that calculates the value of the PI number, 
using the Nilakantha series, with a precision of 100 places after the decimal point. */
let resultPi = pi();
console.log(resultPi)

function pi() {
    let x=3
    let y;
    let j=2;
    for(i=2; i<100000000; i = i + 2){
        y = ( 4 / ( i*(i+1)*(i+2) ) )
        x = x + y*Math.pow(-1, j)
        j++
        console.log(x.toFixed(100))
    }
    return x
}