// eslint-disable-next-line import/extensions
import plain from './plain.js';
// eslint-disable-next-line import/extensions
import stylish from './stylish.js';
// eslint-disable-next-line import/extensions
import json from './json.js';

export default (diff, formatName) => {
  switch (formatName) {
    case 'plain':
      return plain(diff);
    case 'json':
      return json(diff);
    case 'stylish':
      return stylish(diff);
    default:
      return `Output format ${formatName} not found`;
  }
};
