const SUBJECT_LIST_LENGTH = 4;

export const getSubjectIds = (subjects) => {
  const ids = subjects.map(s => s.links.subjects[0])
    .filter((id, i, self) => self.indexOf(id) === i);
  if (ids.length > SUBJECT_LIST_LENGTH) { ids.length = SUBJECT_LIST_LENGTH; }
  return ids;
};

export const transcriptionImage = subject =>
  Object.assign({}, { src: subject.locations[0]['image/jpeg'], alt: subject.metadata.Filename });

export const subjectWorkflow = (subject, allWorkflows, classifications) => {
  const classification = classifications.find(c => c.links.subjects[0] === subject.id);
  const workflow = allWorkflows.find(w => w.id === classification.links.workflow);
  return workflow;
};
