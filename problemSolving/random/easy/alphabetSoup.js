// input a string
// output will be the alphabetical order case sensetive string

// input = 'ElephanT'
// output = 'aEehlnpT'

// 0. make string into lowercase
// 1. convert string into an characters array
// 2. sort that string using array.sort() method, it will output a sorted array.
// 3. convert that array into string
// 4. check the original string has some capital letter and push them into an array
// 5. replace all the capital letter from the small letter from that string

const inputedString = 'ElepHAnNT';
let charArrSortedForSmallLetters = [];
const finalArr = [];

function alphabetSoup(str) {
	let myString = str.toLowerCase();
	const charArrSorted = myString.split('').sort();
	charArrSortedForSmallLetters = charArrSorted;

	const numberOfCapLettersInTheArr = capitalLettersArr();

	for (letter of numberOfCapLettersInTheArr) {
		replaceSmallToCap(letter.key.toLowerCase(), letter.numberOfCapLetter);
	}
	return charArrSortedForSmallLetters.join('');
}

function capitalLettersArr() {
	capLetterArr = [];
	let lettersArr = inputedString.split('');

	for (let letter of lettersArr) {
		if (letter.toLocaleUpperCase() === letter) {
			capLetterArr.push({
				key: letter,
				numberOfCapLetter: numberOfCapitalLetters(letter),
			});
		}
	}

	return capLetterArr;
}

function numberOfCapitalLetters(letter) {
	let count = 0;

	for (let i = 0; i < inputedString.length; i++) {
		if (letter === inputedString[i]) {
			count++;
		}
	}
	return count;
}

function replaceSmallToCap(letter, numberOfLetter) {
	let count = 0;
	for (let i = 0; i < charArrSortedForSmallLetters.length; i++) {
		if (charArrSortedForSmallLetters[i] === letter) {
			charArrSortedForSmallLetters[i] =
				charArrSortedForSmallLetters[i].toUpperCase();
			count++;
			if (count === numberOfLetter) break;
		}
	}
}

const finalString = alphabetSoup(inputedString);
console.log(finalString);
