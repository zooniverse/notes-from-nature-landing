import React from 'react';
import Header from 'header';
import { FatFooter } from 'fat-footer';
import { Title } from 'title';
import { Contributors } from 'contributors';

export const About = () =>
  <div className="about">
    <Header />
    <div className="about-title">
      <Title title="Transcribe notes from nature, contribute to science." />
      <hr />
    </div>
    <div className="about-content">
      <h2>The Notes from Nature Project</h2>
      <div className="paragraph-and-image">
        <div>
        <p>
          People have been collecting specimens from the natural world for centuries.
          Today, there are an estimated two billion specimens housed in natural history museums
          around the world! These biological collections document where species and populations
          exist now and where they existed decades and centuries before, so they hold irreplaceable
          information necessary for uncovering the patterns of changes in species distributions
          and ecosystem composition over time. Scientists use such data and information in order to
          address key environmental issues we are facing right now, such as the impacts of climate
          change and how diseases affect wildlife and humans.
        </p>
        <p>
          Only a small fraction of all natural history specimen data is available digitally over
          the Internet, while the vast majority remains locked away from view and use. The Notes
          from Nature transcription project is a citizen science platform built to address this
          problem by digitizing the world’s biological collections, one record at a time!
        </p>
        </div>
        <img src="about/sernec.jpg" />
      </div>
      <h3>Citizen scientists, why does your work matter for both science and museums globally?</h3>
      <p>
        Natural history museums across the world share a common goal – to make scientific data
        accessible to those who would use it. The Notes from Nature project gives you the
        opportunity to make a scientifically important contribution. Every transcription
        that is completed brings us closer to filling gaps in our knowledge of global biodiversity.
        Help museum staff and scientists by transcribing the labels and ledgers that have been
        meticulously recorded and stored as a way to preserve our natural heritage. Join us in
        unlocking this important information - take some notes from nature!
      </p>

      <h3>Natural historians, how can you add an expedition to Notes from Nature?</h3>
      <p>
        We have good news.
      </p>

    </div>
    <Contributors />
    <FatFooter />
  </div>;
