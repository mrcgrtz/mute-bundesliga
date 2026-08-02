import allHashtags from './hashtags/index.js';

export default function mute(year) {
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
		const splitted = [...hashtag];
		for (const [index, char] of Object.keys(letters).entries()) {
			if (!letters[char].includes(splitted[index + 1])) {
				letters[char].push(splitted[index + 1]);
			}
		}
	}

	for (const value of Object.values(letters)) {
		value.sort((a, b) => a.localeCompare(b));
	}

	return `#([${letters.first.join('')}][${letters.second.join('')}][${letters.third.join('')}]){2}`;
}
