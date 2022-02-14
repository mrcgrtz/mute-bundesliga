const mute = require('./mute.js');
const allHashtags = require('./hashtags/index.js');

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

module.exports = Main;
