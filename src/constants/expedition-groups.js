import { BirdIcon } from 'components/icons/bird';
import { HerbIcon } from 'components/icons/herb';
import { IdeaIcon } from 'components/icons/idea';
import { InsectIcon } from 'components/icons/insect';
import { FungusIcon } from 'components/icons/fungus';
import { ButterflyIcon } from 'components/icons/butterfly';
import { MicroscopeIcon } from 'components/icons/microscope';
import { TrilobiteIcon } from 'components/icons/trilobite';
import { CaddisflyIcon } from 'components/icons/caddisfly';

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
  Fossils: {
    name: 'Fossils',
    icon: TrilobiteIcon,
    badgeGroup: 'fossil',
  },
  Aquatics: {
    name: 'Aquatics',
    icon: CaddisflyIcon,
    badgeGroup: 'aquatic',
  },
  Labs: {
    name: 'Labs',
    icon: IdeaIcon,
    badgeGroup: 'lab',
  },
};

Object.keys(expeditionGroups).forEach((k) => {
  expeditionGroups[k].prefix = k;
});
