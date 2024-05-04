const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert')

eval(fs.readFileSync('code.js')+'');

// only code taken from geeksforgeeks to use in testing was this function
function isPrime(n) { 
    if (n <= 1) return false 
    for (let i = 2; i < n; i++) 
        if (n % i == 0) return false
    return true
} 
// used to dynamically find solutions up to n
function primesToN(n) {
    if (n < 2) return []
    let primes = [2]
    for (let i = 3; i <= n; i++) {
        if (isPrime(i)) primes.push(i)
    }
    return primes
}

const sieveTest =
    jsc.forall("nat", function(n) {
        return JSON.stringify(sievePrimes(n)) ==
            JSON.stringify(primesToN(n));
    })

const trialTest =  
    jsc.forall("nat", function(n) {
        return JSON.stringify(trialPrimes(n)) ==
            JSON.stringify(primesToN(n))
    })

const dijkstraTest =  
    jsc.forall("nat", function(n) {
        return JSON.stringify(dijkstraPrimes(n)) ==
            JSON.stringify(primesToN(n))
    })

jsc.assert(sieveTest)
jsc.assert(trialTest)
jsc.assert(dijkstraTest)
