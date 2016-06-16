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
        id: '2046',
      },
      {
        active: true,
        display_name: 'Herbarium_WeDigFLPlants\' Laurels of Florida—Fight Laurel Wilt',
        completeness: 0.00,
        id: '2050',
      },
      {
        active: true,
        display_name: 'Pinned Specimen_CalBug Bee Flies',
        completeness: 0.00,
        id: '2045',
      },
      {
        active: true,
        display_name: 'Butterfly_New World Swallowtail Butterflies',
        completeness: 0.00,
        id: '2054',
      },
    ],
  },
};

export const initialWorkflows = Object.assign({}, envInitialWorkflows[process.env.NODE_ENV]);
