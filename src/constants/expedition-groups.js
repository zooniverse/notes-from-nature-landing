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
    badgeGroup: 'Plants',
  },
  {
    name: 'Bugs',
    prefix: 'Calbug',
    icon: InsectIcon,
    badgeGroup: 'Bugs',
  },
  {
    name: 'Pinned Specimen',
    prefix: 'Pinned Specimen',
    icon: InsectIcon,
    badgeGroup: 'Bugs',
  },
  {
    name: 'Birds',
    prefix: 'Birds',
    icon: BirdIcon,
    badgeGroup: 'Birds',
  },
  {
    name: 'Macrofungi',
    prefix: 'Macrofungi',
    icon: FungusIcon,
    badgeGroup: 'Macrofungi',
  },
  {
    name: 'Butterflies',
    prefix: 'Butterfly',
    icon: ButterflyIcon,
    badgeGroup: 'Bugs',
  },
];

/* eslint "prefer-const": 0 */
export let expeditionGroupMap = {};
expeditionGroups.forEach(e => (expeditionGroupMap[e.prefix] = e));
