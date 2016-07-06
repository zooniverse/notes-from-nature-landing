import { expeditionGroups } from 'constants/expedition-groups';
import { findExpedition } from 'helpers/expeditions';
import { badgeGroups } from 'constants/badge-groups';

function countsByBadgeGroup(workflows, activityByWorkflow) {
  const counts = {};
  Object.keys(activityByWorkflow).forEach(id => {
    const workflow = workflows.find(w => w.id === id);
    if (workflow) {
      const expedition = findExpedition(workflow.display_name);
      const badgeGroup = expeditionGroups[expedition.group].badgeGroup;
      if (!counts[badgeGroup]) { counts[badgeGroup] = 0; }
      counts[badgeGroup] += activityByWorkflow[id];
    }
  });
  return counts;
}

export function multiBadges(activity) {
  const earned = {};
  badgeGroups.MULTI.forEach(b => {
    const n = Object.keys(activity).filter(id => activity[id] >= b.count).length;
    if (n >= b.expeditions) {
      if (!earned.MULTI) { earned.MULTI = []; }
      earned.MULTI.push(b);
    }
  });
  return earned;
}

export function taxonBadges(allWorkflows, activityByWorkflow) {
  const earned = {};
  const counts = countsByBadgeGroup(allWorkflows, activityByWorkflow);
  Object.keys(counts).sort().forEach(k => {
    badgeGroups[k].filter(b => b.count <= counts[k])
      .forEach(b => {
        if (!earned[b.group]) { earned[b.group] = []; }
        earned[b.group].push(b);
      });
  });
  return earned;
}

export function totalCount(activityByWorkflow) {
  return Object.keys(activityByWorkflow).reduce(
    (prev, curr) => prev + activityByWorkflow[curr], 0);
}
