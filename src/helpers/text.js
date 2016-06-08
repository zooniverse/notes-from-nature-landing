export const pluralize = (plural, n) => {
  const singular = plural.replace(/e?s$/, '');
  return n === 1 ? singular : plural;
};
