const Note = {
	C: 261.6,
	C_: 277.2,
	D: 293.7,
	Eb: 311.1,
	E: 329.6,
	F: 349.2,
	F_: 370.0,
	G: 392.0,
	G_: 415.3,
	A: 440.0,
	Bb: 466.2,
	B: 493.9,
}

const noteSets = [
	[Note.G, Note.A, Note.B],
	[Note.D, Note.E, Note.F_],
	[Note.F, Note.G, Note.A],
	[Note.C, Note.D, Note.E],
]

function xorshift(seed) {
	let x = seed
	x ^= x << 13
	x ^= x >> 17
	x ^= x << 5
	return Math.abs(x)
}

function shuffleArray(array, rand) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(rand() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}