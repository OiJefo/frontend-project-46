import _ from "lodash";

const addIndent = (depth, replacer = " ", spacesCount = 4) =>
  replacer.repeat(spacesCount * depth - 2);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = Object.keys(value);
  const result = keys.map((key) => {
    const newKey = value[key];
    return `${addIndent(depth + 1)}  ${key}: ${stringify(newKey, depth + 1)}`;
  });
  return `{\n${result.join("\n")}\n  ${addIndent(depth)}}`;
};

const stylishFormat = (array) => {
  const iter = (node, depth = 1) => {
    const result = node.map((element) => {
      if (element.type === "parent") {
        return `${addIndent(depth)}  ${element.key}: {\n${iter(
          element.children,
          depth + 1
        )}\n${addIndent(depth)}  }`;
      }
      if (element.type === "stay same") {
        return `${addIndent(depth)}  ${element.key}: ${stringify(
          element.children,
          depth
        )}`;
      }
      if (element.type === "deleted") {
        return `${addIndent(depth)}- ${element.key}: ${stringify(
          element.children,
          depth
        )}`;
      }
      if (element.type === "added") {
        return `${addIndent(depth)}+ ${element.key}: ${stringify(
          element.children,
          depth
        )}`;
      }
      return `${addIndent(depth)}- ${element.key}: ${stringify(
        element.children,
        depth
      )}\n${addIndent(depth)}+ ${element.key}: ${stringify(
        element.children2,
        depth
      )}`;
    });

    return result.join("\n");
  };
  return `{\n${iter(array)}\n}`;
};

export default stylishFormat;
