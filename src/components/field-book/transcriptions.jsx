import React, { PropTypes } from 'react';
import { transcriptionImage, subjectExpedition } from 'helpers/recents';
import { localeDate } from 'helpers/text';

export const FieldBookTranscriptions = ({ recents, allWorkflows }) =>
  <div className="transcription-container">
    <h3>Recent Transcriptions</h3>
    <hr />
    <div className="transcriptions">
    { recents.map((recent, i) => {
      const img = transcriptionImage(recent);
      const expedition = subjectExpedition(recent, allWorkflows);
      return (
        <div className="transcription" key={i}>
          <img src={img.src} alt={img.alt}></img>
          <div className="roll-over">
            <h4>{expedition.name}</h4>
            <span>{`Transcribed on ${localeDate(recent.created_at)}`}</span>
          </div>
        </div>
      );}
    )}
    </div>
  </div>;

FieldBookTranscriptions.propTypes = {
  recents: PropTypes.array,
  allWorkflows: PropTypes.array,
};
