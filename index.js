import allHashtags from './hashtags/index.js';

const mute = year => {
	const hashtags = allHashtags[year];
	if (!hashtags) {
		return;
	}

	const letters = {
		first: [],
		second: [],
		third: [],
	};

	for (const hashtag of hashtags) {
		const splitted = hashtag.split('');
		for (const [index, char] of Object.keys(letters).entries()) {
			if (!letters[char].includes(splitted[index + 1])) {
				letters[char].push(splitted[index + 1]);
			}
		}
	}

	for (const [list] of Object.entries(letters)) {
		letters[list].sort();
	}

	return `#([${letters.first.join('')}][${letters.second.join('')}][${letters.third.join('')}]){2}`;
};

export default mute;
