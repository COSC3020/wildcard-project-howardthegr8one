[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/tTztJ7yI)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving, how you're doing it, and that you test
your code.

<h1 style="text-align: center">Howard Shaw COSC 3020</h2>
<h1 style="text-align: center">Wildcard Project</h2>

## Overview
I stumbled across this Youtube video: <https://www.youtube.com/watch?v=fwxjMKBMR7s> and since I'd never heard of Dijkstra's prime algorithm, and wasn't familiar with the Sieve of Eratosthenes and Trial Division algorithms either I wanted to implement them myself based purely on the explanations in the video. Although the creator has his own implementations in Python I did not look at or use his code in any way for this project. 

My goal was to use only the general overviews of the algorithms from the video. I was able to implement Trial Division 100% on my own, and my implementation of the Sieve needed a few different iterations before I had to look at an implementation online to ensure that it ran as fast as it was supposed to. The issue was that I was attempting to put actual values in the array that's initialized rather making it a boolean array. Unfortunately I had a lot of trouble with Dijkstra's prime algorithm. Even after several iterations and then turning to resources online I was not able to make this particular algorithm run at the speed it should. 

## Problems and Solutions
These algorithms were fun and interesting to work on because my early implementations all ran too slow (aside from trial division, that was surprisingly easy to implement) and forced me to really consider how I'm iterating through my arrays, what data structures I was using, etc. Additionally despite the fact I wasn't able to implement Dijkstra's prime algorithm correctly I spent a lot of time using different data structures (arrays versus dictionaries) and spent quite a bit of time researching different javascript runtimes for different array and dictionary operations.

Furthermore I was able to learn more about some subtle topics I was unaware of like the fact that division operations are technically slower than multiplication, which is partly why the trial division algorithm runs slower than the sieve.

## Runtime Analyses
### Sieve of Eratosthenes:
The $\Theta$ runtime of my sieve implementation is $\Theta(n \cdot log(logn))$. The reasoning for this is that I initialize a boolean array of size $n$, the nested for loops then run in $log(logn)$ because the outer loop runs from `i = 2; i*i <= n` and the inner loop runs under similar conditions with `j = i*i; j <= n; j+=i`. 
### Trial Division:
The $\Theta$ runtime of my trial division implementation is $\Theta(n \cdot log(n))$. Reason being that again we have a for loop that runs from $2$ to $n$, which asymptotically is linear. Within that loop I have another loop that runs from $0$ to $\sqrt(n)$, which results in a final runtime complexity of $\Theta(n \cdot log(n))$.
### Dijkstra's Prime Algorithm:
Unfortunately because of how I implemented my version of Dijkstra's algorithm the runtime is magnitudes slower than it should be. The reason for this is how I'm incrementing and using my pool of multiples. The way the algorithm is explained is that if the current number we're considering is equal to the smallest multiple, we must increment that multiple by it's associated prime. If the smallest multiple occurs more than once in the pool, we must increment every occurence by it's associated prime. Additionally we must then find the new smallest multiple in the pool before moving onto the next iteration. 

The only way I could come up was to iterate through the pool of multiples, increment all of the ones that meet our condition, and then iterate again through it to find the new smallest multiple. These operations create a $\Theta(n^2)$ runtime which ruins the point of Dijkstra's version. If I was able to increment the correct multiples and select the new smallest without iterating through the pool so often, for example, by using a heap to track the multiples and their primes, the runtime would speed up to $\Theta(n \cdot logn)$, but in practice would actually be faster than Trial Division despite having the same runtimes. This is because Dijkstra's version essentially memoizes the Trial Division approach and avoids some of the repeated work. 

### Comparison Plots
I attempted to recreate Dr. Kotthoff's slides when he compared the different runtimes of various sorting algorithms, but testing results up to 1 million were taking way too long. I then worked with another computer science major friend of mine to parallelize the tests and writing the results to files, but even parallelized my Dijkstra implementation was simply taking too long for a project like this. In the end I eventually just ran 1,000 tests at five different thresholds for sizes of n:

100

1,000

10,000

100,000

1,000,000

I decided this was good enough to show the differences in runtimes for these three algorithms. I also spent a few hours attempting to track memory usage for each algorithm to compare those as well, however memory usage in javascript can be difficult to track accurately without using hack-y workarounds and I eventually scrapped the memory comparison entirely. 
Below are scatter plots showing the comparison between the two properly implemented Trial Division and Sieve of Eratosthenes algorithm runtimes, and the second plot compares these to my poor Dijkstra implementation. 

![trialNsieve](https://github.com/COSC3020/wildcard-project-howardthegr8one/blob/main/trialNsieve.png)

![allThree](https://github.com/COSC3020/wildcard-project-howardthegr8one/blob/main/allThree.png)
