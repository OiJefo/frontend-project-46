import yaml from 'js-yaml';

const parse  = (file, type) => {
  switch (type) {
    case 'yml':
    case 'yaml':
      return yaml.load(file);
    case 'json':
    default:
      return JSON.parse(file);
  }
};

export default parse;