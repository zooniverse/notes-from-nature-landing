import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Hero } from 'components/hero';
import { FatFooter } from 'components/fat-footer';
import { findExpedition } from 'helpers/expeditions';
import dateformat from 'dateformat';
import { OutboundLink } from 'react-ga';

const CompletedExpeditions = ({ inactiveWorkflows }) =>
  <div className="completed-expeditions">
    <Hero title="Completed Expeditions" subtitle="" />
    <div className="tiles">
      {inactiveWorkflows.map((workflow, i) => {
        const expedition = findExpedition(workflow.display_name);
        const completed = expedition.completed_at ||
        dateformat(workflow.finished_at, 'mmmm d yyyy');
        return (
          <div className="tile" key={i}>
            <div className="completed-expedition">
              <img src={ require(`images/expeditions/${expedition.image}`) }
                alt={expedition.name}
              >
              </img>
              <div className="snippet">{expedition.snippet}</div>
              <div className="label">
                <div>{expedition.name}</div>
                <div className="completed">Completed: {completed}</div>
              </div>
            </div>
            {expedition.link ?
              <OutboundLink to={`${expedition.link}`} className="more-info"
                eventLabel={`${expedition.link}`} target="_blank"
                aria-label="More information"
              >
                <i className="fa fa-info-circle" aria-hidden="true"></i>
              </OutboundLink>
              : ''
            }
          </div>
        );
      })}
    </div>
    <FatFooter />
  </div>;

CompletedExpeditions.propTypes = {
  inactiveWorkflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    inactiveWorkflows: state.workflows.inactiveWorkflows,
  };
}

export default connect(mapStateToProps)(CompletedExpeditions);
