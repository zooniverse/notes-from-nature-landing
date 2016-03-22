import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { collections } from 'constants/collections';
import * as action from 'actions/landing';

export default class Landing extends Component {
  componentDidMount() {
    this.props.dispatch(action.fetchProjectData());
  }
  makeHref(collection, i) {
    if (collection.subcollections) {
      return `/#subcollections/${i}`;
    }
    return collection.url;
  }
  render() {
    return (
      <div className="landing">
        <div className="hero">
          <div className="landing-header">
            <div className="header-links">
              <span className="first active">Get Started</span>
              <Link to="/about">About</Link>
              <Link to="/about">Discuss</Link>
              <Link to="/about" className="last">Blog</Link>
            </div>
            <div className="login-info">
              <span>Log in Placeholder</span>
            </div>
          </div>
          <div className="landing-title">
            <div className="action"><span>TRANSCRIBE MUSEUM RECORDS</span></div>
            <div><hr/></div>
            <div className="tagline">
              <span>Notes&nbsp;</span>
              <span className="smaller">from</span>
              <span>&nbsp;Nature</span>
            </div>
          </div>
          <div className="links">
            {collections.map((collection, i) =>
              <div className="collection" key={i}>
                <a href={this.makeHref(collection, i)}>
                  <svg>
                    <image xlinkHref={collection.image}/>
                  </svg>
                </a>
              </div>
            )}
          </div>
          <div className="counters">
            <div>
              <div className="numbers">-</div>
              <div className="subtitle">Collections available</div>
            </div>
            <div>
              <div className="numbers">-</div>
              <div className="subtitle">Total transcriptions</div>
            </div>
            <div>
              <div className="numbers">-</div>
              <div className="subtitle">Users contributing</div>
            </div>
          </div>
        </div>
        <div className="why">
          <h3 className="title center">Why should you get involved?</h3>
          <div className="reasons">
            <div>
              <img src="landing/home_icon_bird.png" alt="avian best friend"/>
              <h3>To ifuncmprove our world.</h3>
              <p>Museum records contain historical biodiversity data. Scientists and researchers
                can use the data to conduct new research and make better conservation decisions.
              </p>
            </div>
            <div>
              <img src="landing/home_icon_troffee.png" alt="trophy"/>
              <h3>Transcribe with pride!</h3>
              <p>Transcribe records in any collection and earn badges along the way!</p>
            </div>
            <div>
              <img src="landing/home_icon_lab.png" alt="lab"/>
              <h3>You are contributing to real science. Thank you!</h3>
              <p>The digitized data you are creating will help advance research related to
                 species extinction, ecosystem changes, environmental health and even human health.
               </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  collections: PropTypes.array,
  dispatch: PropTypes.func,
};

function mapStateToProps() {
  return {
  };
}

export default connect(mapStateToProps)(Landing);
