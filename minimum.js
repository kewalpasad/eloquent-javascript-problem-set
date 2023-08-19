/*The previous chapter introduced the standard function Math.min that returns its
smallest argument.We can build something like that now.Write a function min 
that takes two arguments and returns their minimum.*/

function min(num1, num2) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		return 'Not a number';
	}
	return Math.min(num1, num2);
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(0, 'test'));
// → Not a number
console.log(min(0, undefined));
// → Not a number
console.log(min(0, null));
// → Not a number
console.log(min(0, 0));
// → 0
