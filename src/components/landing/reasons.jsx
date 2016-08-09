import React from 'react';

export const LandingReasons = () =>
  <div className="reasons">
    <div className="content">
      <div className="content-left">
        <h3 className="title">Why should you get involved?</h3>
        <div className="tiles">
          <div className="tile">
            <img src="landing/home_icon_bird.png" alt="avian best friend" />
            <div>
              <h3>To improve our world</h3>
              <p>
                Museum records contain historical biodiversity data. Scientists and researchers
                can use the data to conduct new research and make better conservation decisions.
              </p>
            </div>
          </div>
          <div className="tile">
            <img src="landing/home_icon_troffee.png" alt="trophy" />
            <div>
              <h3>Transcribe with pride</h3>
              <p>
                Take part in a Notes from Nature expedition, build your own collection
                and earn badges along the way. Transcribe records in any expedition and
                earn badges along the way!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-right">
        <h4>Notes from the Researchers</h4>
        <p>
          "The digitized data you are creating will help advance research related to
          species extinction, ecosystem changes, environmental health and even human health."
         </p>
      </div>
    </div>
  </div>;
