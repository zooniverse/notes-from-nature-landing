import React from 'react';
import { FooterLogo } from 'footer/logo';
import { footer } from 'constants/footer';
import { OutboundLink } from 'react-ga';

export const FatFooter = () =>
  <footer className="main-footer">
    <section className="main-footer-zooniverse-info">
      <div className="zooniverse-logo">
        <img src={require('images/logos/footer-logo-bg.jpg')} alt="Zooniverse Logo" />
        <FooterLogo />
      </div>
      <div className="markdown"><p>{footer.info.content}</p></div>
      <OutboundLink className="footer-link-button" to="https://www.zooniverse.org/"
        target="_blank" aria-label="Link to Zooniverse" eventLabel="https://www.zooniverse.org/"
      >
        <span>{footer.info.callToAction}</span>
      </OutboundLink>
      </section>
      <section className="main-footer-projects-lists">
        {footer.projectsLists.map((list, i) =>
          <div key={i} className="project-list-container">
            <h5>{list.header}</h5>
            <ul className="project-list">
            {list.projects.map((project, j) =>
              <li key={j}>
                  <OutboundLink to={ `http://www.zooniverse.org/#/#${project.href}` }
                    target="_blank" aria-label={`Link to ${project.name}`}
                    eventLabel={ `http://www.zooniverse.org/#/#${project.href}` }
                  >
                    {project.text}
                  </OutboundLink>
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
          <OutboundLink to="https://twitter.com/nfromn" target="_blank"
            aria-label="Link to Notes from Nature Twitter"
            eventLabel="https://twitter.com/nfromn"
          >
            <i className="fa fa-twitter fa-2x"></i>
          </OutboundLink>
          <OutboundLink to="https://www.facebook.com/Notes-from-Nature-459259654152934/?fref=ts"
            target="_blank" aria-label="Link to Notes from Nature Facebook"
            eventLabel="https://www.facebook.com/Notes-from-Nature-459259654152934/?fref=ts"
          >
            <i className="fa fa-facebook-official fa-2x"></i>
          </OutboundLink>
          <OutboundLink to="https://blog.notesfromnature.org/" target="_blank"
            aria-label="Link to Notes from Nature Blog"
            eventLabel="https://blog.notesfromnature.org/"
          >
            <i className="fa fa-pencil-square-o fa-2x"></i>
          </OutboundLink>
        </div>
      </section>
  </footer>;
