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
