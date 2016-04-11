import React from 'react';
import { Header } from 'header/header';
import { FatFooter } from 'footer/fat-footer';

/* eslint "react/prefer-stateless-function": 1 */

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Header active={ 'about' } />
        <div className="title">
          <h2>
            Notes From Nature
            <span className="subtitle">
              Transcribe notes from nature, contribute to science.
            </span>
          </h2>
          <hr />
        </div>
        <div className="about-content">
          <h2>The Project</h2>
          <div className="paragraph-and-image">
            <div>
            <p>
              People have been collecting specimens from the natural world for centuries - minerals,
              plants, fungi and animals. Today, there are an estimated two billion specimens housed
              in natural history museums around the world! These biological collections document
              where species and populations exist now and where they existed decades and centuries
              before, so they hold irreplaceable information necessary for uncovering the patterns
              of changes in species distributions and ecosystem composition over time. Scientists
              use such data and information in order to address key environmental issues we are
              facing right now, such as the impacts of climate change and how diseases affect
              wildlife and humans.
            </p>
            <p>
              For the information held in these collections to be used to its full potential there
              must be better digital access to these data. Most natural history collections are
              housed in museum cabinets, where they are not easily available to citizens and
              researchers. Only a small fraction of all natural history specimens is available
              digitally over the Internet, while the vast majority remains locked away from view
              in an inflexible, limited format. The Notes from Nature transcription project is
              a citizen science platform built to address this problem by digitizing the world’s
              biological collections one record at a time!
            </p>
            </div>
            <img src="about/sernec.jpg" />
          </div>
          <h3>People and Partners</h3>
          <p>
            Multiple collections, containing specimens representing over 200 institutions,
            are currently involved with Notes from Nature. Meet some of the primary scientists,
            collaborators and developers:
          </p>
          <ul>
            <li>
              Kip Will, Rosemary Gillespie, Joanie Ball, Meghan Culpepper, Joyce Gross and
              Peter Oboyski at the University of California at Berkeley, who are key
              participants in the CalBug project.
              <a href="http://calbug.berkeley.edu/Overview.html">Calbug</a>
              , funded by the National Science Foundation, is a collaborative digitizing
                    project that includes the nine major insect collections in California - the
              <a href="http://essig.berkeley.edu/">Essig Museum of Entomology</a> at UC Berkeley, the
              <a href="http://research.calacademy.org/ent">California Academy of Sciences</a>, the
              <a href="http://www.cdfa.ca.gov/plant/PPD/csca.html">
              California State Collection of Arthropods</a>, the
              <a href="http://bohart.ucdavis.edu/">Bohart Museum</a> at UC Davis, the
              <a href="http://entmuseum.ucr.edu/">Entomology Research Museum UC Riverside</a>,
              <a href="http://mnhc.ucsc.edu/">Museum of Natural History Collections at UC Santa Cruz</a>,
              <a href="http://www.sdnhm.org/science/entomology/"> San Diego Natural History Museum</a>,
              <a href="http://www.sbnature.org/collections/invert/entom/ent01.htm">
                Santa Barbara Museum of Natural History
              </a>, and the
              <a href="http://www.nhm.org/site/research-collections/entomology">LA County Museum</a>.
              These collections are comprised of pinned insects with labels and are a prime
              example of the stunning diversity of insect life.
            </li>
            <li>
              <a href="http://www.neoninc.org/about/staff/michael-denslow">Michael Denslow</a>
              at NEON,
              <a href="http://biology.appstate.edu/faculty-staff/103">Zack Murrell</a>
              at Appalachian State University, and
              <a href="http://dmconsult.library.virginia.edu/aboutus/">Andrew Sallans</a>
              at University of Virginia, who are key participants in the
              <a href="http://www.sernec.org/">
                South Eastern Regional Network of Expertise and Collections (SERNEC)
              </a>
              &nbsp;project. SERNEC is a collaborative collection from about 222 herbaria across
              the Southeastern United States, representing over 12 million plant specimens!
              Each specimen in Notes from Nature includes a herbarium sheet image, where you
              can see the dried plant mounted on the paper and labeled with species and
              habitat information.
            </li>
            <li>
              Tim Conyers, Database Manager at the Natural History Museum of London (NHML).
              Tim is responsible for zoology digitization projects at NHML and the Museum’s
              collections management system. The NHML has digitized its bird ledgers, which
              is one of the world's richest collections of historical specimens, spanning over
              a hundred years and covering the globe!
            </li>
            <li>
              <a href="https://sites.google.com/site/robgur/">Rob Guralnick</a>
              and Aly Seeberger, from the
              <a href="http://cumuseum.colorado.edu/">University of Colorado Museum of Natural History</a>
              , who have provided test datasets in order to determine the cost, accuracy and speed
              of volunteer transcriptions compared to other methods, and helped test Notes from
              Nature.
            </li>
            <li>
              The teams from
              <a href="http://vizzuality.com/">Vizzuality</a> and the
              <a href="https://www.zooniverse.org/">Zooniverse</a>
                who helped create the look and feel of the project
            </li>
          </ul>

          <h3>Notes from Nature and You</h3>
          <div className="paragraph-and-image">
            <img src="about/calbug.jpg" />
            <p>
              Natural history museums across the world share a common goal – to make scientific
              data accessible to those who would use it. The Notes from Nature project gives you
              the opportunity to make a scientifically important contribution. Every transcription
              that is completed brings us closer to filling gaps in our knowledge of global
              biodiversity. Help museum staff and scientists by transcribing the labels and
              ledgers that have been meticulously recorded and stored for the very reason that
              they might be someday be useful. Join us in unlocking this important information -
              take some notes from nature!
            </p>
          </div>

          <h3>How to become a participant in Notes from Nature</h3>
          <p>
            Thanks for your interest in Notes from Nature! Below we provide some
            background on Notes from Nature and more about how we are planning to
            grow our pool of institutional participants. First and foremost, we ask for
            your patience. Notes from Nature has very limited capacity and resources
            that is already spread thinly to cover a lot of tasks.
          </p>

          <p>
            How did Notes from Nature (NfN) come to be? NfN was developed as part
            of Alfred P. Sloan funding support to the Citizen Science Alliance and the
            Zooniverse. Three different consortia of natural history collections put in
            separate proposals related to specimen transcription as part of a call for
            proposals for new Zooniverse projects. All three proposals were folded
            into one project, NfN. Many months of collaborative work between the
            science teams, Vizzuality and Zooniverse developers, led to the site we
            have today.
          </p>

          <p>
            This background is meant to be instructive. Notes from Nature does
            have a long term mission and support for operating costs. The partners
            involved want to see Notes from Nature thrive and grow, and we want
            you to be a part of it. Having said that, each additional partner presents
            both challenges and opportunities. We currently have limited capacity to
            develop new interfaces or make major changes to the site.
          </p>

          <p>
            Growing Notes from Nature needs to be done strategically and we have
            developed a set of criteria for prioritizing how we can best proceed.
            Those criteria are as follows:
          </p>

          <ol>
            <li>
              Your collection can be transcribed using an interface similar to the ones
              already developed for herbarium sheets and insect pins.  If you have a great
              idea that requires a new interface, we still want to hear the idea and we
              can discuss the ways to support developing that.
            </li>
            <li>
              You are willing to devote the time and energy needed to develop new
              content to the NfN blog for example, help transcribers via the excellent
              discussion boards that Notes from Nature runs, and deal with the shared
              responsibility of site management and data management. If there is a
              special case, such as an orphaned digital collection, etc. please contact us
              with more details!
            </li>
            <li>
              You can contribute resources to Notes from Nature that can support
              shared tasks that have been prioritized by the team. These resources
              can be available funding that could support management of the project,
              Zooniverse developers or it can be local programming or community
              support effort.
            </li>
          </ol>

          <p>
            Notes from Nature has set up a Steering Committee (members listed at the
            bottom of this page) that helps guide prioritization and other issues related
            to Notes from Nature. If you want to collaborate with Notes from Nature
            down the road and plan to write us into grant proposals, please directly
            contact the committee Chair, Michael Denslow. We ask for a lead time of
            at least 4 weeks in order for us to be able to work with you to develop a
            winning strategy to writing Notes from Nature into your grant.
          </p>

          <p>
            Whether you are ready to become a participant, or want to coordinate
            becoming a participant in the future and write us into a proposal, please fill
            out the form below to start the process. We will make every attempt to
            get back to you as soon as possible after you have completed the form.
          </p>

          <a href="https://docs.google.com/forms/d/1rUnOysEP8iZG__El2MAR7jBLFVMFBAZgCoykQUj03ms/viewform">
            Application for Inclusion Form
          </a>

          <h4>Steering Committee Membership</h4>
          <p>
            (Chair) Michael Denslow, Asst. Dir. of Scientific Collections, NEON Inc.<br />
            Robert Guralnick, Curator and Assoc. Professor, CU Boulder<br />
            Austin Mast, Curator and Assoc. Prof., Florida State University and iDigBio<br />
            Andrew Sallans, Head of Strategic Data Initiatives. University of Virginia<br />
            Chris Synder, Adler Planetarium and the Zooniverse<br />
            Barbara Thiers, Director, William and Lynda Steere Herbarium,
            The New York Botanical Garden<br />
            Kipling Will, Director, Essig Museum of Entomology and Associate Professor,
            UC, Berkeley
          </p>
          <h4>MUSEUMS INVOLVED</h4>
          <div className="museums">
            <a href="http://www.nhm.ac.uk/tring/research-and-curation/index.html">
              <img alt="Natural History Museum" src="logos/natural_history_museum_white.jpg" />
            </a>
            <a href="http://www.sernec.org/">
              <img alt="SERNEC" src="logos/sernec.png" />
            </a>
            <a href="http://calbug.berkeley.edu/">
              <img alt="Calbug" src="logos/calbug_white.jpg" />
            </a>
            <a href="http://vizzuality.com/">
              <img alt="Vizzuality" src="logos/vizzuality.png" />
            </a>
            <a href="http://www.nsf.gov/">
              <img alt="National Science Foundation" src="logos/national-science-foundation.gif" />
            </a>
          </div>
        </div>
        <FatFooter />
      </div>
    );
  }
}
