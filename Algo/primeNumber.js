function isPrime(n) {
  if (n <= 1) return false;
  // Check from 2 to n-1
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function primeNumber(range) {
  let primeNumbers = [];
  for (let i = 1; i <= range; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}
console.log(primeNumber(50));

//prime - >1 2 3 5 7 11 13
