import * as types from '../constants/project-preference-actions';

const initialState = {
  projectPrefernceFetched: false,
  mock: {
    workflows: [
      { count: 5, display_name: 'Herbarium_WeDigFLPlants\' Mints of Florida—More than Mojitos' },
      { count: 6, display_name: 'Herbarium_WeDigFLPlants\' Laurels of Florida—Fight Laurel Wilt' },
      { count: 7, display_name: 'Herbarium_University of South Florida' },
      { count: 8, display_name: 'Pinned Specimen_CalBug Bee Flies' },
      { count: 9, display_name: 'Butterfly_New World Swallowtail Butterflies' },
      { count: 10, display_name: 'Calbug_Essig Museum Collection' },
    ],
  },
};

export function projectPreference(state = initialState, action) {
  let nextState;
  switch (action.type) {

    case types.PROJECT_PREFERENCE_DATA_REQUESTED:
      return Object.assign({}, state, { projectPrefernceFetched: false });

    case types.PROJECT_PREFERENCE_DATA_RECEIVED:
      nextState = Object.assign({}, state, {
        projectPrefernceFetched: true,
        mock: Object.assign({}, action.json, initialState.mock),
      });
      return nextState;

    default:
      return state;
  }
}
