import { LandingExpeditionGroupHerbIcon } from 'components/expedition-group/herb';
import { LandingExpeditionGroupBirdIcon } from 'components/expedition-group/bird';
import { LandingExpeditionGroupInsectIcon } from 'components/expedition-group/insect';
import { LandingExpeditionGroupFungusIcon } from 'components/expedition-group/fungus';


export const expeditionGroups = [
  {
    name: 'Herbarium',
    prefix: 'Herbarium',
    icon: LandingExpeditionGroupHerbIcon,
  },
  {
    name: 'Bugs',
    prefix: 'Calbug',
    icon: LandingExpeditionGroupInsectIcon,
  },
  {
    name: 'Birds',
    prefix: 'Birds',
    icon: LandingExpeditionGroupBirdIcon,
  },
  {
    name: 'Macrofungi',
    prefix: 'Macrofungi',
    icon: LandingExpeditionGroupFungusIcon,
  },
];

/* eslint "prefer-const": 1 */
export let expeditionGroupMap = {};
expeditionGroups.forEach(e => (expeditionGroupMap[e.prefix] = e));
