import yaml from "js-yaml";

const parse = (file, type) => {
  switch (type) {
    case "json":
    default:
      return JSON.parse(file);
    case "yml":
    case "yaml":
      return yaml.load(file);
  }
};

export default parse;
