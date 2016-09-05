const envConfig = {
  staging: {
    projectId: '1613',
    oldProjectId: '1613',
    workflowUrl: 'https://pfe-preview.zooniverse.org/projects/rafe-dot-lafrance/notes-from-nature-on-staging/classify?reload=1&',
    panoptesReturnUrl: 'http://localhost:3000/',
    panoptesAppId: '24ad5676d5d25c6aa850dc5d5f63ec8c03dbc7ae113b6442b8571fce6c5b974c',
  },
  production: {
    projectId: '1558',
    oldProjectId: '42',
    workflowUrl: 'https://www.zooniverse.org/projects/zooniverse/notes-from-nature/classify?reload=1&',
    panoptesReturnUrl: 'https://www.notesfromnature.org/',
    panoptesAppId: 'ddfe340dea1039c21c2d73f4fb4362c3da152a2732be866ddcfd3f0d1163cc0c',
  },
};

export const config = Object.assign({}, envConfig[process.env.NODE_ENV]);
