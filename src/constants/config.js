const envConfig = {
  staging: {
    projectId: '1613',
    oldProjectId: '1613',
    workflowUrl: 'https://pfe-preview.zooniverse.org/projects/rafe-dot-lafrance/notes-from-nature-on-staging/classify?reload=1&',
    panoptesReturnUrl: 'http://localhost:3000/',
    panoptesAppId: '16ac801e4ad438d929d30668206df31294e7a7222ce3f449a1c4b45cd80d44cc',
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
