export const footer = {
  info: {
    content: `
      The Zooniverse is the world’s largest and most popular platform
      for people-powered research. This research is made possible by
      hundreds of thousands of volunteers around the world.
      Zooniverse research results in new discoveries, datasets useful
      to the wider research community, and many publications.
    `,
    callToAction: 'See the Zooniverse',
  },
  // change this to api fetch (either launch approved or featured?) when project categories exist
  projectsLists: [{
    header: 'Space',
    projects: [{
      href: 'galaxyZoo.org',
      text: 'Galaxy Zoo',
    }, {
      href: 'milkyWayProject.org',
      text: 'Milky Way Project',
    }, {
      href: 'solarStormWatch.org',
      text: 'Solar Storm Watch',
    }, {
      href: 'planetHunters.org',
      text: 'Planet Hunters',
    }, {
      href: 'planetFour.org',
      text: 'Planet Four',
    }, {
      href: 'radioGalaxyZoo.org',
      text: 'Radio Galaxy Zoo',
    }, {
      href: 'diskDetective.org',
      text: 'Disk Detective',
    }],
  }, {
    header: 'Climate',
    projects: [{
      href: 'oldWeather.org',
      text: 'Old Weather',
    }, {
      href: 'cycloneCenter.org',
      text: 'Cyclone Center',
    }],
  }, {
    header: 'Nature',
    projects: [{
      href: 'snapshotSerengeti.org',
      text: 'Snapshot Serengeti',
    }, {
      href: 'planktonPortal.org',
      text: 'Plankton Portal',
    }, {
      href: 'floatingForests.org',
      text: 'Floating Forests',
    }, {
      href: 'condorWatch.org',
      text: 'Condor Watch',
    }, {
      href: 'penguinWatch.org',
      text: 'Penguin Watch',
    }, {
      href: 'chimpAndSee.org',
      text: 'Chimp and See',
    }, {
      href: 'orchidObservers.org',
      text: 'Orchid Observers',
    }],
  }, {
    header: 'Humanities',
    projects: [{
      href: 'operationWarDiary.org',
      text: 'Operation War Diary',
    }, {
      href: 'ancientLives.org',
      text: 'Ancient Lives',
    }, {
      href: 'notesFromNature.org',
      text: 'Notes from Nature',
    }, {
      href: 'scienceGossip.org',
      text: 'Science Gossip',
    }],
  }, {
    header: 'Biology and Physics',
    projects: [{
      href: 'cellSlider.org',
      text: 'Cell Slider',
    }, {
      href: 'wormWatchLab.org',
      text: 'Worm Watch Lab',
    }, {
      href: 'higgsHunters.org',
      text: 'Higgs Hunters',
    }],
  }],
  social: {
    callToAction: 'Share',
    content: `
      <p>
        <a href="https://www.zooniverse.org/" target="_blank">
          <strong>Zooniverse.org</strong>
        </a>
        The universe is too big to explore without you. |
        <a href="https://www.zooniverse.org/privacy" target="_blank">
          Privacy Policy
        </a>
        |
        <a href="https://github.com/zooniverse/notesFromNature" target="_blank">
          Source &amp; Bugs
        </a>
      </p>
    `,
  },
};
