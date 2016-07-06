export const expeditions = {
  DEFAULT: {
    default: true,
    snippet: 'We need your help with transcribing these specimens!',
    image: 'default_expedition.png',
    link: '',
  },
  'Herbarium_WeDigFLPlants\' Mints of Florida—More than Mojitos': {
    snippet: `
      Florida is home to over 110 species of native and naturalized mints, including
      Scarlet Calamint. This expedition contains Florida mint specimens from four different
      herbaria.  Help the WeDigFLPlants group transcribe specimens of the flora they dig.
    `,
    image: 'Herbarium_WeDigFLPlants_Mints_of_Florida.jpg',
    link: 'https://biospex.org/project/wedigflplants',
    completed_at: 'June 21 2016',
  },
  'Herbarium_WeDigFLPlants\' Laurels of Florida—Fight Laurel Wilt': {
    snippet: `
      The fatal laurel wilt fungus reached Florida in 2005 and now all members of the family,
      including Sassafras, are threatened. Help the WeDigFLPlants group transcribe specimens of
      Florida's 15 native and naturalized laurel species to build the historical baseline.
    `,
    image: 'Herbarium_WeDigFLPlants_Laurels_of_Florida.jpg',
    link: 'https://biospex.org/project/wedigflplants',
    completed_at: 'June 21 2016',
  },
  'Pinned Specimen_CalBug Bee Flies': {
    snippet: `
      This expedition features 1000 images of bee fly (Bombyliidae) specimens from the CalBug
      project. The specimens were collected across the western Unites States. The bee flies are a
      large family of flies that feed on nectar and pollen. Some are important pollinators. Species
      of bee flies sometimes resemble bees, which is how they got their common name.
    `,
    image: 'Pinned_Specimen_bee_flies_expedition.jpg',
    link: 'http://calbug.berkeley.edu/',
    completed_at: 'June 19 2016',
  },
  'Butterfly_New World Swallowtail Butterflies': {
    snippet: `
      I am interested in how climate change has shaped the evolutionary history of New World
      Swallowtail Butterflies. The museum specimens in this collection provide a detailed record
      of the geographical variation and distribution of butterfly species, with which I can better
      understand their history.
    `,
    image: 'Butterfly_Papilio.png',
    link: 'http://hannahlowens.weebly.com/',
    completed_at: 'June 28 2016',
  },
  'Pinned Specimen_CalBug Bee Flies 2': {
    snippet: `
      This expedition features 1000 images of bee fly (Bombyliidae) specimens from the CalBug
      project. The specimens were collected across the western Unites States. The bee flies are a
      large family of flies that feed on nectar and pollen. Some are important pollinators. Species
      of bee flies sometimes resemble bees, which is how they got their common name.
    `,
    image: 'Pinned_Specimen_bee_flies_expedition.jpg',
    link: 'http://calbug.berkeley.edu/',
    completed_at: 'June 26 2016',
  },
  'Herbarium_WeDigFLPlants\' St. John\'s Worts of Florida—Diversity to Lift your Spirits': {
    snippet: `
      Florida is home to 37 species in the St. John's Wort Family. Help the
      WeDigFLPlants group transcribe specimens from this medicinally
      important plant family.
    `,
    image: 'Herbarium_WeDigFLPlants_Hypericum.jpg',
    link: 'https://biospex.org/project/wedigflplants',
  },
  'Herbarium_WeDigFLPlants\' Rose Gentians of Florida—Beauty from the Center of its Diversity': {
    snippet: `
      Florida's 12 species of Rose Gentians make it the center of diversity
      for this gorgeous group of gentians.  Help the WeDigFLPlants group
      transcribe specimens to understand the group's diversity and
      distribution at a finer scale.
    `,
    image: 'Herbarium_WeDigFLPlants_Rose_Gentian.jpg',
    link: 'https://biospex.org/project/wedigflplants',
  },
  'Pinned Specimen_CalBug Bee Flies 3': {
    snippet: `
      This expedition features 1000 images of bee fly (Bombyliidae) specimens from the CalBug
      project. The specimens were collected across the western Unites States. The bee flies are a
      large family of flies that feed on nectar and pollen. Some are important pollinators. Species
      of bee flies sometimes resemble bees, which is how they got their common name.
    `,
    image: 'Pinned_Specimen_bee_flies_expedition.jpg',
    link: 'http://calbug.berkeley.edu/',
  },
  'Herbarium_Plants of Virginia - Ant Plants I': {
    snippet: `
      Ants are essential to the life of over 11,000 plant species worldwide.
      Help us learn more about this remarkable partnership in Virginia.
    `,
    image: 'Herbarium_PlantsOfVirginia_Ant_Plants_I.jpg',
    link: 'https://biospex.org/project/ant-plants-of-virginia',
  },
};

Object.keys(expeditions).forEach((k) => {
  expeditions[k].name = k.replace(/^[^_]+_/, '');
  expeditions[k].group = k.replace(/_.+$/, '');
});
