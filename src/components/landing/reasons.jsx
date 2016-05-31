import React from 'react';

export const LandingReasons = () =>
  <div className="reasons">
    <h3 className="reasons-title">Why should you get involved?</h3>
    <div className="reason">
      <div>
        <img src="landing/home_icon_bird.png" alt="avian best friend" />
        <h3>To improve our world.</h3>
        <p>Museum records contain historical biodiversity data. Scientists and researchers
          can use the data to conduct new research and make better conservation decisions.
        </p>
      </div>
      <div>
        <img src="landing/home_icon_troffee.png" alt="trophy" />
        <h3>Transcribe with pride!</h3>
        <p>Transcribe records in any expedition and earn badges along the way!</p>
      </div>
      <div>
        <img src="landing/home_icon_lab.png" alt="lab" />
        <h3>You are contributing to real science. Thank you!</h3>
        <p>The digitized data you are creating will help advance research related to
           species extinction, ecosystem changes, environmental health and even human health.
         </p>
      </div>
    </div>
  </div>;
