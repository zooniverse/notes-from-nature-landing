export const pluralize = (plural, n, singular = '') => {
  const singleton = singular || plural.replace(/e?s$/, '');
  return n === 1 ? singleton : plural;
};

export const localeDate = date =>
  (new Date(date)).toLocaleDateString('en-Us',
    { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
