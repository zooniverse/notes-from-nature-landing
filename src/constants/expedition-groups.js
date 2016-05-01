import { LandingExpeditionGroupIconHerb } from 'components/expedition-group/icons/herb';
import { LandingExpeditionGroupIconBird } from 'components/expedition-group/icons/bird';
import { LandingExpeditionGroupIconInsect } from 'components/expedition-group/icons/insect';
import { LandingExpeditionGroupIconFungus } from 'components/expedition-group/icons/fungus';


export const expeditionGroups = [
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

/* eslint "prefer-const": 1 */
export let expeditionGroupMap = {};
expeditionGroups.forEach(e => (expeditionGroupMap[e.group] = e));
