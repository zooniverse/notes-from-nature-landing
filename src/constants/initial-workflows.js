const envInitialWorkflows = {
  staging: {
    activeWorkflows: [
      {
        active: true,
        display_name: 'Herbarium_WeDigFLPlants\' Mints of Florida—More than Mojitos',
        completeness: 0.00,
        id: '2318',
      },
    ],
  },
  production: {
    activeWorkflows: [
      {
        active: true,
        display_name: 'Herbarium_WeDigFLPlants\' Mints of Florida—More than Mojitos',
        completeness: 0.00,
        id: '1930',
      },
      {
        active: true,
        display_name: 'Herbarium_WeDigFLPlants\' Laurels of Florida—Fight Laurel Wilt',
        completeness: 0.00,
        id: '1931',
      },
      {
        active: true,
        display_name: 'Pinned Specimen_CalBug Bee Flies',
        completeness: 0.00,
        id: '1932',
      },
    ],
  },
};

export const initialWorkflows = Object.assign({}, envInitialWorkflows[process.env.NODE_ENV]);
