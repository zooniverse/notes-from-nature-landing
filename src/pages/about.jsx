import React from 'react';
import Header from 'components/header';
import { FatFooter } from 'components/fat-footer';
import { Title } from 'components/title';
import { Contributors } from 'components/contributors';

export const About = () =>
  <div className="about">
    <Header />
    <div className="about-title">
      <Title title="Transcribe notes from nature, contribute to science." />
      <hr />
    </div>
    <div className="about-content">
      <h2>The Notes from Nature Project</h2>
      <img src="about/sernec.jpg" alt="Preparing a specimen" />
      <p>
        People have been collecting specimens from the natural world for centuries.
        Today, there are anywhere from 2-10 billion specimens housed in natural history museums
        around the world! These biological collections document where species and populations
        exist now and where they existed decades and centuries before, so they hold irreplaceable
         information necessary for uncovering the patterns of changes in species distributions and
         ecosystem composition over time. Scientists use such data and information in order to
         address key environmental issues we are facing right now, such as the impacts of climate
         change and how diseases affect wildlife and humans.
      </p>
      <p>
        Only a small fraction of all natural history specimen data is available digitally over the
        Internet, while the vast majority remains locked away from view and use. The Notes from
        Nature transcription project is a citizen science platform built to address this problem
        by helping to digitize the world’s biological collections.
      </p>
      <p>
        While the overall goal of digitizing specimens is important, Notes from Nature organizes
        this effort into discrete expeditions that you can join, which often have direct scientific
        objectives, and are focused on a taxonomic group, location, or time period.
      </p>
      <h3>Citizen scientists, why does your work matter for both science and museums globally?</h3>
      <p>
        Natural history museums across the world share a common goal – to make scientific data
        accessible to those who would use it. The Notes from Nature project gives you the
        opportunity to make a scientifically important contribution. Every transcription that is
        completed brings us closer to filling gaps in our knowledge of global biodiversity.
      </p>
      <p>
        While we want to digitize all this information, the best way to do it is focused on
        scientific value and outcomes, and we have therefore organized this effort into
        “expeditions” that you can join, and in the process meet and help museum staff and
        biodiversity scientists working on different parts of this bigger puzzle.
      </p>
      <h3>
        Do you have biodiversity transcription project? How can you make your own Notes from
        Nature project?
      </h3>
      <p>
        Notes from Nature welcomes anyone who wants to build their own project, and with our
        relaunch, we have greatly simplified and streamlined that process. Before you contact us
        for more details, first ask whether Notes from Nature is the right platform for you.
        Do you have imaged biodiversity specimens with label text (or just labels) that you need
        transcribed? If so, onwards.
      </p>
      <p>
        For now, the first step is to contact the Notes from Nature project manager,
        Michael Denslow (michael.denslow at gmail.com), who can provide you with the full details
        needed to get a project together. In a nutshell, Notes from Nature is built on top of the
        Zooniverse's Project Builder, which greatly simplifies creation of projects. With our new
        system, you can spin up a project in minutes to hours. All you need are images you want
        transcribed and a clear idea of what fields you want to capture.  We will have more details
        shortly.
      </p>
    </div>
    <Contributors />
    <FatFooter />
  </div>;
