import { LandingExpeditionGroupIconHerb } from 'components/landing/expedition-group/icons/herb';
import { LandingExpeditionGroupIconBird } from 'components/landing/expedition-group/icons/bird';
import { LandingExpeditionGroupIconInsect } from 'components/landing/expedition-group/icons/insect';
import { LandingExpeditionGroupIconFungus } from 'components/landing/expedition-group/icons/fungus';


export const expeditions = [
  {
    name: 'Herbarium',
    icon: LandingExpeditionGroupIconHerb,
    group: 'Herbarium',
  },
  {
    name: 'Bugs',
    icon: LandingExpeditionGroupIconInsect,
    group: 'Calbug',
  },
  {
    name: 'Birds',
    icon: LandingExpeditionGroupIconBird,
    group: 'Birds',
  },
  {
    name: 'Macrofungi',
    icon: LandingExpeditionGroupIconFungus,
    group: 'Macrofungi',
  },
];
