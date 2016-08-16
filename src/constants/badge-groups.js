import { pluralize } from 'helpers/text';

export const badgeGroups = {
  MULTI: [
    {
      count: 1,
      expeditions: 5,
      name: 'Novice Collection\'s Explorer',
      badge: 'multi/multi_1x5.png',
    },
    {
      count: 25,
      expeditions: 5,
      name: 'Intermediate Collection\'s Explorer',
      badge: 'multi/multi_25x5.png',
    },
  ],
  CROSS: [
    { count: 10, name: 'Pioneer', badge: 'cross/10_each.png' },
    { count: 30, name: 'Pro', badge: 'cross/NfNProBadge.png' },
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
  magnified: [
    { count: 5, name: '5x Zoom', badge: 'magnified/NfN_Parasitoid-02.png' },
    { count: 50, name: '50x Zoom', badge: 'magnified/NfN_Parasitoid-03.png' },
    { count: 150, name: '150x Zoom', badge: 'magnified/NfN_Parasitoid-04.png' },
  ],
};

Object.keys(badgeGroups).forEach(g => badgeGroups[g].forEach(b => {
  b.group = g;  // eslint-disable-line no-param-reassign
  let description = '';
  switch (g) {
    case 'MULTI':
      description = `for
        ${b.count} ${pluralize('records', b.count)}
        in ${b.expeditions} expeditions`;
      break;
    case 'CROSS':
      description = `for transcribing ${b.count} ${pluralize('records', b.count)}
        in old and new Notes from Nature`;
      break;
    default:
      description = `for transcribing ${b.count} ${b.group}
        ${pluralize('records', b.count)}`;
  }
  b.description = description;  // eslint-disable-line no-param-reassign
}));
