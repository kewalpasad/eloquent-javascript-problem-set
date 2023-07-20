const assendingTriangle = (n) => {
	if (n < 1) {
		console.log('the number provided is less than 0');
	}
	for (let i = '#'; i.length <= n; i += '#') {
		console.log(i);
	}
};

assendingTriangle(7);
assendingTriangle(0);
assendingTriangle(-1);
