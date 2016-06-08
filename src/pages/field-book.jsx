import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from 'components/header';
import { FatFooter } from 'components/fat-footer';
import { Title } from 'components/title';
import { HomeIcon } from 'components/icons/home';
import { fetchProjectPreferenceData } from 'actions/project-preference';
import { earnedBadges, totalCount } from 'helpers/badge-groups';
import { pluralize } from 'helpers/text';

class FieldBook extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.dispatch(fetchProjectPreferenceData(this.props.user.id));
    }
  }

  render() {
    const { user, workflows, activity_count_by_workflow } = this.props;
    const badges = earnedBadges(workflows, activity_count_by_workflow);
    const total = totalCount(activity_count_by_workflow);
    return (
      <div>
        <Header />
        <div className="field-book">
          <div className="field-book-title">
            <Title title={`${user.display_name}'s Field Book`} />
            <Link className="home-alone" to={"/"} aria-label="Return Home">
              <HomeIcon />
            </Link>
          </div>
          <hr />
          <h2>{`You have transcribed ${total} records`}</h2>
          <div className="badges">
            { badges.map((b, i) =>
              <div className="badge" key={i}>
                <img src={require(`../images/badges/${b.badge}`)} alt={`${b.name}`}></img>
                <div className="description">
                  {`The ${b.name} badge is earned for transcrbing ${b.count} ${b.group}
                    ${pluralize('records', b.count)}`}
                </div>
              </div>
            )}
          </div>
        </div>
        <FatFooter />
      </div>
    );
  }
}

FieldBook.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object.isRequired,
  workflows: PropTypes.array,
  activity_count_by_workflow: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    workflows: state.workflow.workflows,
    activity_count_by_workflow: state.projectPreference.activity_count_by_workflow,
  };
}

export default connect(mapStateToProps)(FieldBook);
