import { BirdIcon } from 'components/icons/bird';
import { HerbIcon } from 'components/icons/herb';
import { InsectIcon } from 'components/icons/insect';
import { FungusIcon } from 'components/icons/fungus';
import { ButterflyIcon } from 'components/icons/butterfly';

export const expeditionGroups = {
  Herbarium: {
    name: 'Herbaria',
    icon: HerbIcon,
    badgeGroup: 'plant',
  },
  Calbug: {
    name: 'Bugs',
    icon: InsectIcon,
    badgeGroup: 'insect',
  },
  'Pinned Specimen': {
    name: 'Pinned Specimen',
    icon: InsectIcon,
    badgeGroup: 'insect',
  },
  Birds: {
    name: 'Birds',
    icon: BirdIcon,
    badgeGroup: 'bird',
  },
  Macrofungi: {
    name: 'Macrofungi',
    icon: FungusIcon,
    badgeGroup: 'fungus',
  },
  Butterfly: {
    name: 'Butterflies',
    icon: ButterflyIcon,
    badgeGroup: 'insect',
  },
};

Object.keys(expeditionGroups).forEach((k) => {
  expeditionGroups[k].prefix = k;
});
