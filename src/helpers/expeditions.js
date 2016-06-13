import { expeditions } from 'constants/expeditions';

export function findExpedition(key) {
  return expeditions[key] ? expeditions[key] : expeditions.DEFAULT;
}

export const expeditionsInGroup = (group, workflows) =>
  workflows.filter(e => e.display_name.startsWith(group));

export function recentExpeditions(workflows, classifications) {
  return classifications.map(c => c.links.workflow)
    .filter((v, i, self) => self.indexOf(v) === i)
    .map(id => {
      const workflow = workflows.find(w => w.id === id);
      const expedition = findExpedition(workflow.display_name);
      expedition.id = workflow.id;
      return expedition;
    });
}

export function recentTranscriptions(/**/) {
  //
}
