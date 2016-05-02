import { LandingExpeditionGroupIconHerb } from 'components/expedition-group/icons/herb';
import { LandingExpeditionGroupIconBird } from 'components/expedition-group/icons/bird';
import { LandingExpeditionGroupIconInsect } from 'components/expedition-group/icons/insect';
import { LandingExpeditionGroupIconFungus } from 'components/expedition-group/icons/fungus';


export const expeditionGroups = [
  {
    name: 'Herbarium',
    prefix: 'Herbarium',
    icon: LandingExpeditionGroupIconHerb,
  },
  {
    name: 'Bugs',
    prefix: 'Calbug',
    icon: LandingExpeditionGroupIconInsect,
  },
  {
    name: 'Birds',
    prefix: 'Birds',
    icon: LandingExpeditionGroupIconBird,
  },
  {
    name: 'Macrofungi',
    prefix: 'Macrofungi',
    icon: LandingExpeditionGroupIconFungus,
  },
];

/* eslint "prefer-const": 1 */
export let expeditionGroupMap = {};
expeditionGroups.forEach(e => (expeditionGroupMap[e.prefix] = e));
