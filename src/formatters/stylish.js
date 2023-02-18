import _ from 'lodash';

const getIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(spacesCount * depth - 2);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = Object.keys(value);
  const result = keys.map((key) => {
    const newKey = value[key];
    return `${getIndent(depth + 1)}  ${key}: ${stringify(newKey, depth + 1)}`;
  });
  return `{\n${result.join('\n')}\n  ${getIndent(depth)}}`;
};

const stylish = (array) => {
  const iter = (node, depth = 1) => {
    const result = node.map((element) => {
      if (element.type === 'parent') {
        return `${getIndent(depth)}  ${element.key}: {\n${iter(
          element.children,
          depth + 1,
        )}\n${getIndent(depth)}  }`;
      }
      if (element.type === 'stay same') {
        return `${getIndent(depth)}  ${element.key}: ${stringify(
          element.children,
          depth,
        )}`;
      }
      if (element.type === 'deleted') {
        return `${getIndent(depth)}- ${element.key}: ${stringify(
          element.children,
          depth,
        )}`;
      }
      if (element.type === 'added') {
        return `${getIndent(depth)}+ ${element.key}: ${stringify(
          element.children,
          depth,
        )}`;
      }
      return `${getIndent(depth)}- ${element.key}: ${stringify(
        element.children,
        depth,
      )}\n${getIndent(depth)}+ ${element.key}: ${stringify(
        element.children2,
        depth,
      )}`;
    });

    return result.join('\n');
  };
  return `{\n${iter(array)}\n}`;
};

export default stylish;
