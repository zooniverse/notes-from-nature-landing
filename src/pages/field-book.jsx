import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';
import { FatFooter } from 'components/fat-footer';
import { Title } from 'components/title';

const FieldBook = ({ user }) =>
  <div>
    <Header />
    <div className="field-book">
      <Title title={`Field Book for ${user.display_name}`} />
      <hr />
      <div>{`You have transcribed ${user.classifications_count} records`}</div>
    </div>
    <FatFooter />
  </div>;

FieldBook.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
  };
}

export default connect(mapStateToProps)(FieldBook);
