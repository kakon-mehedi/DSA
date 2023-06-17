const vowels = ['a', 'e', 'i', 'o', 'u'];
const str = 'kakonMehediAmarNameKakonHahaha';
const result = {};

for (let j = 0; j < str.length; j++) {
	if (isVowel(str[j])) {
		if (result[str[j]]) {
			result[str[j]] = result[str[j]] + 1;
		} else {
			result[str[j]] = 1;
		}
	}
}

function isVowel(letter) {
	for (let i = 0; i < vowels.length; i++) {
		if (letter.toLowerCase() == vowels[i]) {
			return true;
		}
	}

	return false;
}

console.log(result);
