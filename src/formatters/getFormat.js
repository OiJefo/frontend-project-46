import stylishFormat from './stylish.js';
import plainFormat from './plain.js';

const getFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylishFormat(data);
    case 'plain':
      return plainFormat(data);
    case 'json':
      return JSON.stringify(data);
    default:
      return `output format ${format} not found`;
  }
};

export default getFormat;
