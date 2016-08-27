export const pluralize = (plural, n) => {
  const singular = plural.replace(/e?s$/, '');
  return n === 1 ? singular : plural;
};

export const localeDate = date =>
  (new Date(date)).toLocaleDateString('en-Us',
    { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
