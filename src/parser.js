import yaml from 'js-yaml';

const parser = (data, dataType) => {
  switch (dataType) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`unknown file extension ${dataType}`);
  }
};
export default parser;
