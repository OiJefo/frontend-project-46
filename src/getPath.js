import path from "path";

const getPath = (way) => {
  if (way.startsWith("/")) {
    return way;
  }
  // eslint-disable-next-line no-undef
  return path.resolve(process.cwd(), way);
};
export default getPath;
