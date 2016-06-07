import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';
import { FatFooter } from 'components/fat-footer';
import { Title } from 'components/title';
import { fetchProjectPreferenceData } from 'actions/project-preference';
import { countsByBadgeGroup } from 'helpers/badge-groups';
import { badgeGroups } from 'constants/badge-groups';

class FieldBook extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.dispatch(fetchProjectPreferenceData(this.props.user.id));
    }
  }

  render() {
    const { user, workflows } = this.props;
    const counts = countsByBadgeGroup(workflows);
    return (
      <div>
        <Header />
        <div className="field-book">
          <Title title={`${user.display_name}'s Field Book`} />
          <hr />
          <div className="total">{`You have transcribed ${counts.total} records`}</div>
          <div>
            { Object.keys(badgeGroups).filter(k => counts[k]).map((k, i) =>
              <div key={i}>
                <div>
                  {k}
                </div>
                {badgeGroups[k].filter(b => b.count <= counts[k]).map((b, j) =>
                  <div className="badge" key={j}>
                    <img src={require(`../images/badges/${b.badge}`)} alt={`${b.name}`}>
                    </img>
                  </div>
                )}
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
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    workflows: state.projectPreference.workflows,
  };
}

export default connect(mapStateToProps)(FieldBook);
