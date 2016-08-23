import { BirdIcon } from 'components/icons/bird';
import { HerbIcon } from 'components/icons/herb';
import { InsectIcon } from 'components/icons/insect';
import { FungusIcon } from 'components/icons/fungus';
import { ButterflyIcon } from 'components/icons/butterfly';
import { MicroscopeIcon } from 'components/icons/microscope';

export const expeditionGroups = {
  Default: {
    name: 'Unknown',
    icon: InsectIcon,
    badgeGroup: 'none',
  },
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
    name: 'Pinned Specimens',
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
  Magnified: {
    name: 'Magnified',
    icon: MicroscopeIcon,
    badgeGroup: 'magnified',
  },
};

Object.keys(expeditionGroups).forEach((k) => {
  expeditionGroups[k].prefix = k;
});
