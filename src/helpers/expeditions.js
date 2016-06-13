import { expeditions } from 'constants/expeditions';

export function findExpedition(key) {
  return expeditions[key] ? expeditions[key] : expeditions.DEFAULT;
}

export const expeditionsInGroup = (group, allWorkflows) =>
  allWorkflows.filter(e => e.display_name.startsWith(group));

export function recentExpeditions(allWorkflows, classifications) {
  const recent = classifications.map(c => c.links.workflow)
    .filter((v, i, self) => self.indexOf(v) === i)
    .map(id => {
      const workflow = allWorkflows.find(w => w.id === id);
      const expedition = findExpedition(workflow.display_name);
      expedition.id = workflow.id;
      expedition.active = workflow.active;
      return expedition;
    });
  if (recent.length > 4) { recent.length = 4; }
  return recent;
}

export function recentTranscriptions(classifications) {
  return classifications;
}
