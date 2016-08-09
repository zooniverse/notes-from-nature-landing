import { expeditions } from 'constants/expeditions';

const RECENT_EXPEDITIONS_LENGTH = 4;

export function findExpedition(key) {
  return expeditions[key] ? expeditions[key] : expeditions.DEFAULT;
}

export const expeditionsInGroup = (group, allWorkflows) =>
  allWorkflows.filter(e => e.display_name.startsWith(group));

export function recentExpeditions(allWorkflows, activityByWorkflow) {
  const allExpeditions = [];
  Object.keys(activityByWorkflow).forEach(id => {
    const workflow = allWorkflows.find(w => w.id === id);
    if (workflow) {
      const expedition = findExpedition(workflow.display_name);
      expedition.id = id;
      expedition.active = workflow.active;
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
