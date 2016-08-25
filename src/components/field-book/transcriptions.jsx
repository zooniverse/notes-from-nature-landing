import React, { PropTypes } from 'react';
import { transcriptionImage, subjectWorkflow } from 'helpers/subjects';

export const FieldBookTranscriptions = ({ subjects, allWorkflows, classifications }) =>
  <div className="transcription-container">
    <h3>Recent Transcriptions</h3>
    <hr />
    <div className="transcriptions">
    { subjects.map((subject, i) => {
      const img = transcriptionImage(subject);
      const workflow = subjectWorkflow(subject, allWorkflows, classifications);
      return (
        <div className="transcription" key={i}>
          <img src={img.src} alt={img.alt}></img>
          <div>{workflow.name}</div>
        </div>
      );}
    )}
    </div>
  </div>;

FieldBookTranscriptions.propTypes = {
  subjects: PropTypes.array,
  allWorkflows: PropTypes.array,
  classifications: PropTypes.array,
};
