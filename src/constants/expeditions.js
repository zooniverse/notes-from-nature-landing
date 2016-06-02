export const expeditions = {
  default: {
    snippet: 'We need your help with transcrbing these specimens!',
    image: 'default_expedition.png',
    info: '',
  },
  'Herbarium_WeDigFLPlants\' Mints of Florida—More than Mojitos': {
    snippet: `
      Florida is home to over 110 species of native and naturalized mints, including
      Scarlet Calamint. This expedition contains Florida mint specimens from four different
      herbaria.  Help the WeDigFLPlants group transcribe specimens of the flora they dig.
    `,
    image: 'Herbarium_WeDigFLPlants_Mints_of_Florida.jpg',
    info: 'http://biospex.org/project/wedigflplants',
  },
  'Herbarium_WeDigFLPlants\' Laurels of Florida—Fight Laurel Wilt': {
    snippet: `
      The fatal laurel wilt fungus reached Florida in 2005 and now all members of the family,
      including Sassafras, are threatened. Help the WeDigFLPlants group transcribe specimens of
      Florida's 15 native and naturalized laurel species to build the historical baseline.
    `,
    image: 'Herbarium_WeDigFLPlants_Laurels_of_Florida.jpg',
    info: 'http://biospex.org/project/wedigflplants',
  },
  'Herbarium_Florida State University': {
    snippet: `
      The FSU Herbarium collection specimens: these flowers
      and plants are carefully pressed onto sheets along with descriptive labels, and
      contain vital information for broader understanding of biodiversity at regional
      and national scales.
    `,
    image: 'Herbarium_Florida_State_University.jpg',
    info: '',
  },
  'Herbarium_Southeastern Louisiana University': {
    snippet: `
      The SELU Herbarium collection is comprised of herbarium specimens: these flowers and plants
      are carefully pressed onto sheets along with descriptive labels, and contain vital
      information for broader understanding of biodiversity at regional and national scales.
    `,
    image: 'Herbarium_Southeastern_Louisiana_University.jpg',
    info: '',
  },
  'Herbarium_University of South Florida': {
    snippet: `
      The USF Herbarium collection is comprised of herbarium specimens: these flowers and plants
      are carefully pressed onto sheets along with descriptive labels, and contain vital
      information for broader understanding of biodiversity at regional and national scales.
    `,
    image: 'Herbarium_University_of_South_Florida.jpg',
    info: '',
  },
  'Calbug_Essig Museum Collections': {
    snippet: `
      Calbug digitizes collections of pinned insect specimens drawn from eight of California's
      major institutions, showcasing the stunning diversity of insect life in our world.
    `,
    image: 'Calbug_Essig_Museum_Collections.jpg',
    info: 'http://calbug.berkeley.edu/',
  },
  'Pinned Specimen_CalBug Bee Flies': {
    snippet: `
      This expedition features 1000 images of bee fly (Bombyliidae) specimens from the CalBug
      project. The specimens were collected across the western Unites States. The bee flies are a
      large family of flies that feed on nectar and pollen. Some are important pollinators. Species
      of bee flies sometimes resemble bees, which is how they got their common name.
    `,
    image: 'Pinned_Specimen_bee_flies_expedition.jpg',
    info: 'http://calbug.berkeley.edu/',
  },
  'Butterfly_New World Swallowtail Butterflies': {
    snippet: `
      I am interested in how climate change has shaped the evolutionary history of New World
      Swallowtail Butterflies. The museum specimens in this collection provide a detailed record
      of the geographical variation and distribution of butterfly species, with which I can better
      understand their history.
    `,
    image: 'Butterfly_Papilio.png',
    info: 'http://hannahlowens.weebly.com/',
  },
};

export function expeditionInfo(key) {
  return expeditions[key] ? expeditions[key] : expeditions.default;
}
