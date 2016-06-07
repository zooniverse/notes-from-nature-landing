import { expeditions } from 'constants/expeditions';

export function findExpedition(key) {
  return expeditions[key] ? expeditions[key] : expeditions.DEFAULT;
}

export const expeditionsInGroup = (group, workflows) =>
  workflows.filter(e => e.display_name.startsWith(group));
