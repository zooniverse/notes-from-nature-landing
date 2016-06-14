import React, { PropTypes } from 'react';
import { transcriptionImages } from 'helpers/subjects';

export const FieldBookTranscriptions = ({ subjects }) =>
  <div>
    <h2>Recent Transcriptions</h2>
    <div className="transcriptions">
    { transcriptionImages(subjects).map((img, i) =>
      <div className="transcription" key={i}>
        <img src={img.src} alt={img.alt}></img>
      </div>
    )}
    </div>
  </div>;

FieldBookTranscriptions.propTypes = {
  subjects: PropTypes.array,
};
