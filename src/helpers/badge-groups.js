import { expeditionGroups } from 'constants/expedition-groups';
import { findExpedition } from 'helpers/expeditions';
import { badgeGroups } from 'constants/badge-groups';

function countsByBadgeGroup(workflows, activityCountByWorkflow) {
  const counts = {};
  Object.keys(activityCountByWorkflow).forEach(id => {
    const workflow = workflows.find(w => w.id === id);
    const expedition = findExpedition(workflow.display_name);
    const badgeGroup = expeditionGroups[expedition.group].badgeGroup;
    if (!counts[badgeGroup]) { counts[badgeGroup] = 0; }
    counts[badgeGroup] += activityCountByWorkflow[id];
  });
  return counts;
}

export function earnedBadges(workflows, activityCountByWorkflow) {
  const counts = countsByBadgeGroup(workflows, activityCountByWorkflow);
  let earned = [];
  Object.keys(counts).sort().forEach(k => {
    console.log(k);
    badgeGroups[k].filter(b => b.count <= counts[k]).forEach(b => earned.push(b));
  });
  earned = earned.concat(badgeGroups.insect);
  return earned;
}

export function totalCount(activityCountByWorkflow) {
  return Object.keys(activityCountByWorkflow).reduce(
    (prev, curr) => prev + activityCountByWorkflow[curr], 0);
}
