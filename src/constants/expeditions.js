import { LandingExpeditionGroupIconHerb } from 'components/landing/expedition-group/icons/herb';
import { LandingExpeditionGroupIconBird } from 'components/landing/expedition-group/icons/bird';
import { LandingExpeditionGroupIconInsect } from 'components/landing/expedition-group/icons/insect';
import { LandingExpeditionGroupIconFungus } from 'components/landing/expedition-group/icons/fungus';


export const expeditions = [
  {
    name: 'Herbarium',
    icon: LandingExpeditionGroupIconHerb,
    prefix: 'Herbarium',
  },
  {
    name: 'Bugs',
    icon: LandingExpeditionGroupIconInsect,
    prefix: 'Calbug',
  },
  {
    name: 'Birds',
    icon: LandingExpeditionGroupIconBird,
    prefix: 'Birds',
  },
  {
    name: 'Macrofungi',
    icon: LandingExpeditionGroupIconFungus,
    prefix: 'Macrofungi',
  },
];
