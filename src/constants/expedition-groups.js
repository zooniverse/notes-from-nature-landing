import { HerbIcon } from 'components/icons/herb';
import { BirdIcon } from 'components/icons/bird';
import { InsectIcon } from 'components/icons/insect';
import { FungusIcon } from 'components/icons/fungus';

export const expeditionGroups = [
  {
    name: 'Herbaria',
    prefix: 'Herbarium',
    icon: HerbIcon,
  },
  {
    name: 'Bugs',
    prefix: 'Calbug',
    icon: InsectIcon,
  },
  {
    name: 'Birds',
    prefix: 'Birds',
    icon: BirdIcon,
  },
  {
    name: 'Macrofungi',
    prefix: 'Macrofungi',
    icon: FungusIcon,
  },
];

/* eslint "prefer-const": 1 */
export let expeditionGroupMap = {};
expeditionGroups.forEach(e => (expeditionGroupMap[e.prefix] = e));
