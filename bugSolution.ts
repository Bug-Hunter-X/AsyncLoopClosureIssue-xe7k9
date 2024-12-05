function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Using let i ensures a new i is created for each iteration
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
}

printNumbers2(5); // This will now print 1, 2, 3, 4, 5