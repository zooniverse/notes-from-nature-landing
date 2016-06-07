import { expeditionGroups } from 'constants/expedition-groups';

export const activeExpeditionGroups = (workflows) =>
  Object.keys(expeditionGroups).filter(k => workflows.some(w => w.display_name.startsWith(k)))
    .map(k => expeditionGroups[k]);
