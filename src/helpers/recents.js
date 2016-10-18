import { findExpedition } from 'helpers/expeditions';

export const RECENTS_LIST_LENGTH = 6;

export const transcriptionImage = recent =>
  Object.assign({}, { src: recent.locations[0]['image/jpeg'], alt: 'recent transcription' });

export const subjectExpedition = (recent, allWorkflows) => {
  const workflow = allWorkflows.find(w => w.id === recent.links.workflow);
  return findExpedition(workflow ? workflow.display_name : '');
};
