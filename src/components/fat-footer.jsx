import React from 'react';
import { FooterLogo } from 'footer/logo';
import { footer } from 'constants/footer';

export const FatFooter = () =>
  <footer className="main-footer">
    <section className="main-footer-zooniverse-info">
      <div className="zooniverse-logo">
        <img src={require('images/logos/footer-logo-bg.jpg')} alt="Zooniverse Logo" />
        <FooterLogo />
      </div>
      <div className="markdown"><p>{footer.info.content}</p></div>
      <a className="footer-link-button" href="https://www.zooniverse.org/"
        target="_blank" aria-label="Link to Zooniverse"
      >
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
                  <a href={ `http://www.zooniverse.org/#/#${project.href}` }
                    target="_blank" aria-label={`Link to ${project.name}`}
                  >
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
          <a href="https://twitter.com/nfromn" target="_blank"
            aria-label="Link to Notes from Nature Twitter"
          >
            <i className="fa fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/Notes-from-Nature-459259654152934/?fref=ts"
            target="_blank" aria-label="Link to Notes from Nature Facebook"
          >
            <i className="fa fa-facebook-official fa-2x"></i>
          </a>
          <a href="https://blog.notesfromnature.org/" target="_blank"
            aria-label="Link to Notes from Nature Blog"
          >
            <i className="fa fa-pencil-square-o fa-2x"></i>
          </a>
        </div>
      </section>
  </footer>;
