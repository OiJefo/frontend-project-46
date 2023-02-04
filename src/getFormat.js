import stylishFormat from "./stylish.js";
import plainFormat from "./plain.js";

const getFormat = (data, format) => {
  switch (format) {
    case "stylish":
      return stylishFormat(data, 0);
    case "plain":
      return plainFormat(data);
    case "json":
      return JSON.stringify(data);
    default:
      throw new Error(`${format} is not supported`);
  }
};

export default getFormat;
