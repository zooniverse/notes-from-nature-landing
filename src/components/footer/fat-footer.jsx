import React, { Component } from 'react';
import FooterLogo from 'footer/logo';
import { footer } from 'constants/footer';

export default class FatFooter extends Component {
  render() {
    return (
      <footer className="main-footer">
        <section className="main-footer-zooniverse-info">
          <div className="zooniverse-logo">
            <img src="footer-logo-bg.jpg"/>
            <FooterLogo />
          </div>
          <div className="markdown"><p>{footer.info.content}</p></div>
          <a className="footer-link-button" href="https://www.zooniverse.org/" target="_blank">
            <span>{footer.info.callToAction}</span>
          </a>
          </section>
          <section className="main-footer-projects-lists">
            {footer.projectsLists.map((list, i) =>

              <div key={i} className="project-list-container">
                <h5>{list.header}</h5>
                <ul className="project-list">
                {list.projects.map((project, j) =>
                  <li key={j}>
                      <a href={'http://www.zooniverse.org/#/#' + project.href} target="_blank">
                        {project.text}
                      </a>
                  </li>
                )}
                </ul>
              </div>
            )}
          </section>
          <section className="main-footer-social-media">
            <div className="markdown" dangerouslySetInnerHTML={{ __html: footer.social.content }}>
            </div>
            <div className="social-media-links">
            </div>
          </section>
      </footer>
    );
  }
}
