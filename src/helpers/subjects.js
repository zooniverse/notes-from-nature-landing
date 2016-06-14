const SUBJECT_LIST_LENGTH = 4;

export const getSubjectIds = (subjects) => {
  const ids = subjects.map(s => s.links.subjects[0])
    .filter((id, i, self) => self.indexOf(id) === i);
  if (ids.length > SUBJECT_LIST_LENGTH) { ids.length = SUBJECT_LIST_LENGTH; }
  return ids;
};

export const transcriptionImages = subjects =>
  subjects.map((s) => {
    const img = {
      src: s.locations[0]['image/jpeg'],
      alt: s.metadata.Filename,
    };
    return img;
  });
