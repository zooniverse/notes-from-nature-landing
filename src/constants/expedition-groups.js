import { BirdIcon } from 'components/icons/bird';
import { HerbIcon } from 'components/icons/herb';
import { InsectIcon } from 'components/icons/insect';
import { FungusIcon } from 'components/icons/fungus';
import { ButterflyIcon } from 'components/icons/butterfly';

export const expeditionGroups = [
  {
    name: 'Herbaria',
    prefix: 'Herbarium',
    icon: HerbIcon,
    badges: [
      { count: 1, name: 'Seed', badge: require('../images/badges/herbarium/seed.png') },
      { count: 10, name: 'Seedling', badge: require('../images/badges/herbarium/seedling.png') },
      { count: 25, name: 'Sprout', badge: require('../images/badges/herbarium/sapling.png') },
      { count: 75, name: 'Tree', badge: require('../images/badges/herbarium/tree.png') },
      { count: 250, name: 'Oak', badge: require('../images/badges/herbarium/oak.png') },
      {
        count: 1000,
        name: 'Mature Tree',
        badge: require('../images/badges/herbarium/mature-tree.png'),
      },
    ],
  },
  {
    name: 'Bugs',
    prefix: 'Calbug',
    icon: InsectIcon,
    badges: [
      { count: 1, name: 'Egg', badge: require('../images/badges/calbug/egg.png') },
      {
        count: 25,
        name: 'Caterpillar',
        badge: require('../images/badges/calbug/caterpillar.png'),
      },
      {
        count: 100,
        name: 'Butterfly',
        badge: require('../images/badges/calbug/butterfly.png'),
      },
      {
        count: 500,
        name: 'Butterflies',
        badge: require('../images/badges/calbug/butterflies.png'),
      },
    ],
  },
  {
    name: 'Pinned Specimen',
    prefix: 'Pinned Specimen',
    icon: InsectIcon,
    badges: [
      { count: 1, name: 'Egg', badge: require('../images/badges/calbug/egg.png') },
      {
        count: 25,
        name: 'Caterpillar',
        badge: require('../images/badges/calbug/caterpillar.png'),
      },
      {
        count: 100,
        name: 'Butterfly',
        badge: require('../images/badges/calbug/butterfly.png'),
      },
      {
        count: 500,
        name: 'Butterflies',
        badge: require('../images/badges/calbug/butterflies.png'),
      },
    ],
  },
  {
    name: 'Birds',
    prefix: 'Birds',
    icon: BirdIcon,
    badges: [
      { count: 1, name: 'Nest', badge: require('../images/badges/ornithology/nest.png') },
      {
        count: 25,
        name: 'Fledgling',
        badge: require('../images/badges/ornithology/fledgling.png'),
      },
      {
        count: 200,
        name: 'Adult Bird',
        badge: require('../images/badges/ornithology/adult.png'),
      },
    ],
  },
  {
    name: 'Macrofungi',
    prefix: 'Macrofungi',
    icon: FungusIcon,
    badges: [
      { count: 1, name: 'Spore', badge: require('../images/badges/macrofungi/spore.png') },
      { count: 25, name: 'Mycelium', badge: require('../images/badges/macrofungi/mycelium.png') },
      { count: 100, name: 'Mushroom', badge: require('../images/badges/macrofungi/mushroom.png') },
    ],
  },
  {
    name: 'Butterflies',
    prefix: 'Butterfly',
    icon: ButterflyIcon,
    badges: [
      { count: 1, name: 'Egg', badge: require('../images/badges/calbug/egg.png') },
      {
        count: 25,
        name: 'Caterpillar',
        badge: require('../images/badges/calbug/caterpillar.png'),
      },
      {
        count: 100,
        name: 'Butterfly',
        badge: require('../images/badges/calbug/butterfly.png'),
      },
      {
        count: 500,
        name: 'Butterflies',
        badge: require('../images/badges/calbug/butterflies.png'),
      },
    ],
  },
];

/* eslint "prefer-const": 0 */
export let expeditionGroupMap = {};
expeditionGroups.forEach(e => (expeditionGroupMap[e.prefix] = e));
