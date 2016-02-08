export default [
  {
    displayName: 'Calbug',
    backgroundImage: 'images/calbug.jpg',
    description: 'Calbug digitizes collections of pinned insect specimens drawn from eight of California\'s major institutions, showcasing the stunning diversity of insect life in our world.',
    url: 'www.google.com',
  },
  {
    displayName: 'Macrofungi',
    backgroundImage: 'images/fungi.jpg',
    description: 'The Macrofungi Collection comprises mushrooms and related fungi. Macrofungi are often short-lived, documenting their occurrence with specimens is critically important for knowing which macrofungi grow where.',
    url: 'www.yahoo.com',
  },
  {
    displayName: 'Herbarium',
    backgroundImage: 'images/herbarium.jpg',
    description: 'A SERNEC collection is comprised of herbarium specimens: these flowers and plants are carefully pressed onto sheets along with descriptive labels, and contain vital information for broader understanding of biodiversity at regional and national scales.',
    subCollections: [
      {
        displayName: 'Southeastern Louisiana University Herbarium',
        backgroundImage: 'images/SLU.jpg',
        url: 'www.cnn.com',
      },
      {
        displayName: 'Florida State University Herbarium',
        backgroundImage: 'images/herbarium.jpg',
        url: 'www.reddit.com',
      },
      {
        displayName: 'Botanical Research Institute of Texas',
        backgroundImage: 'images/herbarium.jpg',
        url: 'www.imgur.com',
      },
      {
        displayName: 'University of South Florida Herbarium',
        backgroundImage: 'images/herbarium.jpg',
        url: 'www.msn.com',
      },
    ],
  },
];
