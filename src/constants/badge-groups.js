export const badgeGroups = {
  MULTI: [
    { count: 1, groups: 3, name: 'Novice Collection\'s Explorer', badge: 'multi/beginner.png' },
    {
      count: 25,
      groups: 3,
      name: 'Intermediate Collection\'s Explorer',
      badge: 'multi/intermediate.png',
    },
  ],
  plant: [
    { count: 1, name: 'Seed', badge: 'plants/seed.png' },
    { count: 10, name: 'Seedling', badge: 'plants/seedling.png' },
    { count: 25, name: 'Sprout', badge: 'plants/sapling.png' },
    { count: 75, name: 'Tree', badge: 'plants/tree.png' },
    { count: 250, name: 'Oak', badge: 'plants/oak.png' },
    { count: 1000, name: 'Mature Tree', badge: 'plants/mature-tree.png' },
  ],
  insect: [
    { count: 1, name: 'Egg', badge: 'bugs/egg.png' },
    { count: 25, name: 'Caterpillar', badge: 'bugs/caterpillar.png' },
    { count: 100, name: 'Butterfly', badge: 'bugs/butterfly.png' },
    { count: 500, name: 'Butterflies', badge: 'bugs/butterflies.png' },
  ],
  bird: [
    { count: 1, name: 'Nest', badge: 'birds/nest.png' },
    { count: 25, name: 'Fledgling', badge: 'birds/fledgling.png' },
    { count: 200, name: 'Adult Bird', badge: 'birds/adult.png' },
  ],
  fungus: [
    { count: 1, name: 'Spore', badge: 'macrofungi/spore.png' },
    { count: 25, name: 'Mycelium', badge: 'macrofungi/mycelium.png' },
    { count: 100, name: 'Mushroom', badge: 'macrofungi/mushroom.png' },
  ],
  crab: [
    { count: 1, name: 'Egg', badge: 'crabs/egg.png' },
    { count: 25, name: 'Zoea', badge: 'crabs/zoea.png' },
    { count: 50, name: 'Megalops', badge: 'crabs/megalops.png' },
    { count: 100, name: 'Rock Crab', badge: 'crabs/rock-crab.png' },
  ],
};

Object.keys(badgeGroups).forEach(g => badgeGroups[g].forEach(b => {
  b.group = g;  // eslint-disable-line no-param-reassign
}));
