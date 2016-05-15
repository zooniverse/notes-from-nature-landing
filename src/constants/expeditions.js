export const expeditions = {
  default: {
    snippet: 'We need your help with transcrbing these specimens!',
    description: 'We need your help with transcrbing these specimens!',
  },
  'Herbarium_Florida State University': {
    snippet: `
      The FSU Herbarium collection specimens: these flowers
      and plants are carefully pressed onto sheets along with descriptive labels, and
      contain vital information for broader understanding of biodiversity at regional
      and national scales.
    `,
    description: `
      Florida State University's Robert K. Godfrey Herbarium documents the distribution
      and natural variation of 2,400 species of flowering plants, ferns, conifers, and
      cycads found in northern Florida. In this region a number of plant groups,
      including pitcherplants, reach their greatest species richness in North America.
      Join our effort to liberate specimen data from our cabinets and deploy it online—we
      currently serve data for a third of our 220,000 specimens and are adding to this each
      week with your help!
    `,
  },
  'Herbarium_Southeastern Louisiana University': {
    snippet: `
      The SELU Herbarium collection is comprised of herbarium specimens: these flowers and plants
      are carefully pressed onto sheets along with descriptive labels, and contain vital
      information for broader understanding of biodiversity at regional and national scales.
    `,
    description: `
      SERNEC is an organization that supports the 222 Herbaria and over 12 million plant
      specimens found in the Southeastern United States. Each of these herbaria are valued
      collections of plants specimens used in research and teaching. Their value is amplified
      in partnership and  SERNEC is devoted to making the resources of all these Herbaria
      available online as one virtual, researchable collection. SERNEC will improve access to
      specimen data of a richly biodiverse region, and provide a platform for herbarium
      curators and plant scientists to exchange ideas, share expertise, and benefit from the
      value of information shared across institutions.
    `,
  },
  'Herbarium_University of South Florida': {
    snippet: `
      The USF Herbarium collection is comprised of herbarium specimens: these flowers and plants
      are carefully pressed onto sheets along with descriptive labels, and contain vital
      information for broader understanding of biodiversity at regional and national scales.
    `,
    description: `
      Welcome to the University of South Florida (USF) Herbarium and Notes from Nature.
      The USF Herbarium contains over 250,000 preserved plant specimens from as far back
      as the 1840s. As we depend on plants for food, medicine, water and air quality, soil health,
      paper, fabrics, cosmetics, building materials, and beautification, these plant specimens
      contain vital information that help us ensure the health and longevity of our species and
      the ecosystem. They are used by our scientists, our educators, our land managers, our
      resource providers, and many, many others. We need you to help us provide and disseminate
      that information to online users.
    `,
  },
  'Calbug_Essig Museum Collections': {
    snippet: `
      Calbug digitizes collections of pinned insect specimens drawn from eight of California's
      major institutions, showcasing the stunning diversity of insect life in our world.
    `,
    description: `
      Calbug is an effort to digitize terrestrial arthropod-specimen records with a focus on
      California. The project, funded by the National Science Foundation, represents a
      collaboration among eight entomological collections in California to capture data
      from specimen labels. The Calbug Science Team will then use the collection data to
      assess how arthropods have responded to climate change and habitat modification.
      Drawing from over a century of insect collecting in the region, our goal is to develop
      a database of over 1 million geographically referenced specimens.
    `,
  },
};

export function expeditionInfo(key) {
  return expeditions[key] ? expeditions[key] : expeditions.default;
}
