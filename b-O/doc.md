# What does better mean?
- Faster?
- Less memory-intensive?
- More readable?

# Introducing Big O
- Bit O Notation is away to formalize fuzzy counting
- It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
- Big O is a notation for describing the performance of an algorithm

# Bit O Definition
We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
- f(n) could be linear  (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be exponential (f(n) = 2^n)
- f(n) could be logarithmic (f(n) = log(n)) 

Constants and Smaller Don't Matter
O(n+1) => O(n)
O(2n + 30) => O(2n)

## -----Big O of Objects -----
Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)
## When your don't need any ordering Objects are an excellent choice

## Big O of Object Methods
Object.keys- O(n)
Object.values- O(n)
Object.entries- O(n)
hasOwnProperty- O(1)

--- When to use Arrays ----
- When you need order
- When you need fast access.insertion and removal (sort of...)
Big O of Arrays
Insertion - It depends..
Removal - It depends..
Searching - O(n)
Access - O(1)
## Big O of Array Operations 
- push - O(1)
- pop - O(1)
- shift - O(n)
- unshift - O(n)
- splice - O(n)
- slice - O(n)
- reverse - O(n)
- concat - O(n)
- sort - O(n log n)
- forEach/map/filter/reduce - O(n)


