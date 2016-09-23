import React from 'react';
import { OutboundLink } from 'react-ga';

export const Contributors = () =>
  <div className="contributors">
    <h3>Collaborating Institutions, Organizations and Funders</h3>
    <div className="museum-logos">
      <OutboundLink to="http://www.sernec.org/" eventLabel="http://www.sernec.org/">
        <img alt="SERNEC" src="logos/sernec.png" />
      </OutboundLink>
      <OutboundLink to="http://www.flmnh.ufl.edu/" eventLabel="http://www.flmnh.ufl.edu/">
        <img alt="Florida Museum of Natural History" src="logos/fmnh_logoregisteredcolor.jpg" />
      </OutboundLink>
      <OutboundLink to="https://www.fsu.edu/" eventLabel="https://www.fsu.edu/">
        <img alt="Florida State Univerity" src="logos/FSU_Seal.jpg" />
      </OutboundLink>
      <OutboundLink to="http://www.nhm.ac.uk/tring/research-and-curation/index.html"
        eventLabel="http://www.nhm.ac.uk/tring/research-and-curation/index.html"
      >
        <img alt="Natural History Museum" src="logos/natural_history_museum_white.jpg" />
      </OutboundLink>
      <OutboundLink to="http://calbug.berkeley.edu/" eventLabel="http://calbug.berkeley.edu/">
        <img alt="Calbug" src="logos/calbug_white.jpg" />
      </OutboundLink>
      <OutboundLink to="http://www.ufl.edu/" eventLabel="http://www.ufl.edu/">
        <img alt="Univerity of Florida" src="logos/uf_verticalSignature.jpg" />
      </OutboundLink>
      <OutboundLink to="http://www.nsf.gov/" eventLabel="http://www.nsf.gov/">
        <img alt="National Science Foundation" src="logos/nsf1.jpg" />
      </OutboundLink>
    </div>
  </div>;
