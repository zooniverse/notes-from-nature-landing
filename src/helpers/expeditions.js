import { expeditions } from 'constants/expeditions';
import dateformat from 'dateformat';

const RECENT_EXPEDITIONS_LENGTH = 4;

export function filterIfExpeditionConstant(expeditionList) {
  return expeditionList.filter(workflow =>
    Object.keys(expeditions).indexOf(workflow.display_name) !== -1);
}

export function findExpedition(workflow) {
  const displayName = workflow ? workflow.display_name : '';
  const expedition = expeditions[displayName] || expeditions.DEFAULT;
  return Object.assign({}, workflow, expedition);
}

export const expeditionCompleted = (expedition) =>
  expedition.completed_at || dateformat(expedition.finished_at, 'mmmm d yyyy');

export function sortByCompleted(expeditionList) {
  return expeditionList.map(workflow => {
    const expedition = findExpedition(workflow);
    expedition.completed = expeditionCompleted(expedition);
    return expedition;
  }).sort((a, b) => new Date(b.completed) - new Date(a.completed));
}

export const expeditionsInGroup = (group, allWorkflows) =>
  allWorkflows.filter(e => e.display_name.startsWith(group));

export function recentExpeditions(allWorkflows, activityByWorkflow) {
  const allExpeditions = [];
  Object.keys(activityByWorkflow).forEach(id => {
    const workflow = allWorkflows.find(w => w.id === id);
    if (workflow) {
      const expedition = findExpedition(workflow);
      expedition.id = id;
      expedition.count = activityByWorkflow[id];
      allExpeditions.push(expedition);
    }
  });
  // Sort actives before inactives then sort by count descending
  const recent = allExpeditions.sort((a, b) => {
    if (a.active && !b.active) { return -1; }
    if (!a.active && b.active) { return 1; }
    if (a.count > b.count) { return -1; }
    if (a.count < b.count) { return 1; }
    return 0;
  });
  if (recent.length > RECENT_EXPEDITIONS_LENGTH) { recent.length = RECENT_EXPEDITIONS_LENGTH; }
  return recent;
}
