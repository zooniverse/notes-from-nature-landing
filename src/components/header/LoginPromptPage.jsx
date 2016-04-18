import { Component} from 'react';
import { connect } from 'react-redux';
import Layout from './Layout.jsx'
import { loginToPanoptes } from '../actions/login';

class LoginPromptPage extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  render() {
    return (
      <Layout>
        <div className="info-page">
          <section className="info-panel">
            <p>To access our features, you'll need to log in to the Zooniverse</p>
            <div className="action-subpanel">
              <button className="btn btn-info" onClick={this.login}>Login to the Zooniverse</button>
            </div>
          </section>
        </div>
      </Layout>
    );
  }

  login() {
    return this.props.dispatch(loginToPanoptes());
  }
}

export default connect()(LoginPromptPage);  //Connects the Component to the Redux Store
