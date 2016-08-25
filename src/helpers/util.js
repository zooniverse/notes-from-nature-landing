export const PAGE_SIZE = 20;

// Return a list of pages for easy iteration
export const pages = count => {
  const n = Math.round(count / PAGE_SIZE) + (count % PAGE_SIZE ? 1 : 0);
  return Array.apply(null, Array(n)).map((x, i) => i + 1);
};
