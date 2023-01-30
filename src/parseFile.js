import load from "js-yaml";

const parseData = (filePath, ext) => {
  if (ext === "json") {
    return JSON.parse(filePath);
  }
  if (ext === "yaml" || ext === "yml") {
    return load(filePath);
  }
  return console.error("Unknown file format");
};

export default parseData;
