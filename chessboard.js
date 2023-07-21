const chessboard = (n) => {
	if (!n || n < 1 || typeof n !== 'number') {
		console.log('Please provide a valid positive number above 0');
		return 1;
	}
	const oddChessLine = createOddLine(n);
	const evenChessLine = createEvenLine(n);
	for (let i = 0; i < n; i++) {
		i % 2 === 0 ? console.log(evenChessLine) : console.log(oddChessLine);
	}
	return 0;
};

const createOddLine = (n) => {
	let oddLine = '';
	for (let i = 0; i < n; i++) {
		i % 2 === 0 ? (oddLine += '#') : (oddLine += ' ');
	}
	return oddLine;
};

const createEvenLine = (n) => {
	let evenLine = '';
	for (let i = 0; i < n; i++) {
		i % 2 === 0 ? (evenLine += ' ') : (evenLine += '#');
	}
	return evenLine;
};

chessboard(8);
chessboard(0);
chessboard(-1);
chessboard(null);
chessboard(undefined);
chessboard('a');
chessboard(16);
chessboard(160);
