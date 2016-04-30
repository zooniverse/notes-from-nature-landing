const envConfig = {
  staging: {
    projectId: '1613',
    workflowUrl: 'https://pfe-preview.zooniverse.org/projects/rafe-dot-lafrance/notes-from-nature-on-staging/classify?reload=1&',
  },
  production: {
    projectId: '2432',
    workflowUrl: '',
  },
};

export const config = Object.assign({}, envConfig[process.env.NODE_ENV]);
