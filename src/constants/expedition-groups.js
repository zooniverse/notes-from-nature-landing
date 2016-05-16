import { BirdIcon } from 'components/icons/bird';
import { HerbIcon } from 'components/icons/herb';
// import { InsectIcon } from 'components/icons/insect';
import { FungusIcon } from 'components/icons/fungus';
import { ButterflyIcon } from 'components/icons/butterfly';

export const expeditionGroups = [
  {
    name: 'Herbaria',
    prefix: 'Herbarium',
    icon: HerbIcon,
  },
  {
    name: 'Bugs',
    prefix: 'Calbug',
    // icon: InsectIcon,
    icon: ButterflyIcon,
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
  {
    name: 'Butterflies',
    prefix: 'Butterfly',
    icon: ButterflyIcon,
  },
];

/* eslint "prefer-const": 0 */
export let expeditionGroupMap = {};
expeditionGroups.forEach(e => (expeditionGroupMap[e.prefix] = e));
