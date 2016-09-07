import React, { PropTypes } from 'react';
import { transcriptionImage, subjectExpedition } from 'helpers/subjects';
import { localeDate } from 'helpers/text';

export const FieldBookTranscriptions = ({ subjects, allWorkflows, classifications }) =>
  <div className="transcription-container">
    <h3>Recent Transcriptions</h3>
    <hr />
    <div className="transcriptions">
    { subjects.map((subject, i) => {
      const img = transcriptionImage(subject);
      const expedition = subjectExpedition(subject, allWorkflows, classifications);
      return (
        <div className="transcription" key={i}>
          <img src={img.src} alt={img.alt}></img>
          <div className="roll-over">
            <h4>{expedition.name}</h4>
            <span>{`Transcribed on ${localeDate(subject.created_at)}`}</span>
          </div>
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
