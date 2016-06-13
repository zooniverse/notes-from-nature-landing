import React, { PropTypes } from 'react';
import { recentTranscriptions } from 'helpers/expeditions';

export const FieldBookTranscriptions = ({ classifications }) =>
  <div>
    <h2>Recent Transcriptions</h2>
    <div className="transcriptions">
    { recentTranscriptions(classifications).map((c, i) =>
      <div className="transcription" key={i}>
        {c.href}
      </div>
    )}
    </div>
  </div>;

FieldBookTranscriptions.propTypes = {
  classifications: PropTypes.array,
};
