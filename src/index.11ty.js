import mute from './mute.js';
import allHashtags from './hashtags/index.js';

class Main {
	constructor() {
		const current = Object.keys(allHashtags).pop();
		this.regex = mute(current);
	}

	get data() {
		return {
			regex: this.regex,
			layout: 'layout',
		};
	}

	render() {
		return null;
	}
}

export default Main;
