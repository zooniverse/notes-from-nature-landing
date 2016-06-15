import { expeditions } from 'constants/expeditions';

const RECENT_EXPEDITIONS_LENGTH = 4;

export function findExpedition(key) {
  return expeditions[key] ? expeditions[key] : expeditions.DEFAULT;
}

export const expeditionsInGroup = (group, allWorkflows) =>
  allWorkflows.filter(e => e.display_name.startsWith(group));

export function recentExpeditions(allWorkflows, classifications) {
  const recent = [];
  classifications.map(c => c.links.workflow)
    .filter((v, i, self) => self.indexOf(v) === i)
    .forEach(id => {
      const workflow = allWorkflows.find(w => w.id === id);
      if (workflow) {
        const expedition = findExpedition(workflow.display_name);
        expedition.id = workflow.id;
        expedition.active = workflow.active;
        recent.push(expedition);
      }
    });
  if (recent.length > RECENT_EXPEDITIONS_LENGTH) { recent.length = RECENT_EXPEDITIONS_LENGTH; }
  return recent;
}
