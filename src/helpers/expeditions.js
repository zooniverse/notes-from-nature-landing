import { expeditions } from 'constants/expeditions';

export function findExpedition(key) {
  return expeditions[key] ? expeditions[key] : expeditions.DEFAULT;
}

export const expeditionsInGroup = (group, allWorkflows) =>
  allWorkflows.filter(e => e.display_name.startsWith(group));

export function recentExpeditions(allWorkflows, classifications) {
  return classifications.map(c => c.links.workflow)
    .filter((v, i, self) => self.indexOf(v) === i)
    .map(id => {
      const workflow = allWorkflows.find(w => w.id === id);
      const expedition = findExpedition(workflow.display_name);
      expedition.id = workflow.id;
      expedition.active = workflow.active;
      return expedition;
    });
}

export function recentTranscriptions(classifications) {
  return classifications;
}
