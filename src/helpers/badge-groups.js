import { expeditionGroups } from 'constants/expedition-groups';
import { findExpedition } from 'helpers/expeditions';
// import { badgeGroups } from 'constants/badge-groups';

export function countsByBadgeGroup(userWorkflowCounts) {
  const counts = { total: 0 };
  userWorkflowCounts.forEach((workflow) => {
    const expedition = findExpedition(workflow.display_name);
    if (!expedition.default) {
      const expeditionGroup = expeditionGroups[expedition.group];
      const badgeGroup = expeditionGroup.badgeGroup;
      if (!counts[badgeGroup]) { counts[badgeGroup] = 0; }
      counts[badgeGroup] += workflow.count;
      counts.total += workflow.count;
    }
  });
  return counts;
}
