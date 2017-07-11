'use strict';

module.exports = year => {
  let hashtags = [];
  try {
    hashtags = require(`./hashtags/${year}.json`);
  } catch (err) {
    return;
  }

  const letters = {
    first: [],
    second: [],
    third: []
  };

  for (let i = 0; i < hashtags.length; i++) {
    const splitted = hashtags[i].split('');
    letters.first.push(splitted[1]);
    letters.second.push(splitted[2]);
    letters.third.push(splitted[3]);
  }

  for (const list in letters) {
    if (Object.prototype.hasOwnProperty.call(letters, list)) {
      letters[list] = letters[list].sort().filter((el, idx, arr) => idx === arr.indexOf(el));
    }
  }

  return `#([${letters.first.join('')}][${letters.second.join('')}][${letters.third.join('')}]){2}`;
};
