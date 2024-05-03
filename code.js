// references for wildcard project: 

// I know this guy provides code at the end of the video but I did not 
// use or reference what he shows in the video or use his github repo in any way
// beyond just the visuals and overview of the algorithms he provides
// https://www.youtube.com/watch?v=fwxjMKBMR7s

// used as a reference when my implementations ran too slow
// https://www.valentinog.com/blog/node-usage/
// https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value
// https://www.topcoder.com/thrive/articles/sieve-of-eratosthenes-algorithm
// https://wiki.tcl-lang.org/page/Dijkstra%27s+Prime+Algorithm
// https://www.heinrichhartmann.com/archive/Dijkstra%27s-Prime-Number-Algorithm.html

// ONLY USED THIS LINK TO GET PRIME FINDING CODE FOR TESTING, DID NOT USE FOR ANYTHING ELSE:
// https://www.geeksforgeeks.org/prime-numbers/

const { default: test } = require("node:test");

function sievePrimes(n) {
    let isPrime = new Array(n+1).fill(true)
    isPrime[0] = isPrime[1] = false

    for (let i = 2; i*i <= n; i++) {
        if (isPrime[i]) 
            for (let j = i*i; j <= n; j+=i) 
                isPrime[j] = false
    }

    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) primes.push(i)
    }
    return primes;
}

function trialPrimes(n) {
    let primes = []
    for (let i = 2; i <= n; i++) {
        let isPrime = true
        if (primes.length == 0) primes.push(i)
        else {
            for (let j = 0; primes[j] <= Math.floor(Math.sqrt(i)); j++) {
                if (i % primes[j] == 0) {
                    isPrime = false
                    j = primes.length
                }
            }
            if (isPrime) primes.push(i)
        }
    }
    return primes
}

function dijkstraPrimes(n) {
    if (n < 2) return []
    let pool = [[2, 4]]
    let primes = [2]

    for (let i = 3; i <= n; i++) {
        if (i < pool[0][1]) {
            primes.push(i)
            if (i * i <= n) pool.push([i, i * i])
        } 
        else {
            for (let j = 0; j < pool.length; j++) {
                let [n, factor] = pool[j]
                if (factor > i) break
                pool[j][1] = factor + n
            }
            pool.sort((a, b) => a[1] - b[1])
        }
    }
    return primes
}
