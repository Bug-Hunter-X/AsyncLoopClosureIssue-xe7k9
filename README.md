# Unexpected Output in Asynchronous Loop Due to Closure

This repository demonstrates a common issue in JavaScript/TypeScript related to closures and asynchronous operations within loops.  The problem arises when using `setTimeout` (or similar asynchronous functions) inside a loop, as the loop variable's value is not captured correctly at the time the callback is executed. 

The `bug.ts` file contains the problematic code.  The `bugSolution.ts` file offers a solution using `let` to create a block scope variable. 

## How to Reproduce

1. Clone this repository.
2. Compile and run `bug.ts` using a TypeScript compiler.
3. Observe the unexpected output. 
4.  Compile and run `bugSolution.ts` for the corrected output.

## Solution

The solution involves using `let` within the loop to create a new variable scope for each iteration. This ensures that each `setTimeout` callback captures the correct value of `i`.