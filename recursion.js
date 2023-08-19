/*
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/

function isEven(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return 'should be positive whole number';
  } else if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(2.2));
console.log(isEven(-1));
console.log(isEven('1'));
console.log(isEven(undefined));
console.log(isEven(NaN));
