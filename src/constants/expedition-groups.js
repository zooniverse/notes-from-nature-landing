import { BirdIcon } from 'components/icons/bird';
import { HerbIcon } from 'components/icons/herb';
import { InsectIcon } from 'components/icons/insect';
import { FungusIcon } from 'components/icons/fungus';
import { ButterflyIcon } from 'components/icons/butterfly';

export const expeditionGroups = {
  Herbarium: {
    name: 'Herbaria',
    icon: HerbIcon,
    badgeGroup: 'Plants',
  },
  Calbug: {
    name: 'Bugs',
    icon: InsectIcon,
    badgeGroup: 'Bugs',
  },
  'Pinned Specimen': {
    name: 'Pinned Specimen',
    icon: InsectIcon,
    badgeGroup: 'Bugs',
  },
  Birds: {
    name: 'Birds',
    icon: BirdIcon,
    badgeGroup: 'Birds',
  },
  Macrofungi: {
    name: 'Macrofungi',
    icon: FungusIcon,
    badgeGroup: 'Macrofungi',
  },
  Butterfly: {
    name: 'Butterflies',
    icon: ButterflyIcon,
    badgeGroup: 'Bugs',
  },
};

Object.keys(expeditionGroups).forEach((k) => {
  expeditionGroups[k].prefix = k;
});
