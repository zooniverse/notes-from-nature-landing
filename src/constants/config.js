const envConfig = {
  staging: {
    projectId: '2432',
    eduApiRoot: 'https://education.staging.zooniverse.org/',
    routesRoot: 'http://localhost:3000/',
    panoptesAppId: '24ad5676d5d25c6aa850dc5d5f63ec8c03dbc7ae113b6442b8571fce6c5b974c',
    panoptesReturnUrl: 'http://localhost:3000/',
  },
  production: {
    projectId: '2432',
    eduApiRoot: 'https://education-api.zooniverse.org/',
    routesRoot: 'https://notesfromnature.org/',
    panoptesAppId: '442c8c4910fbb9be14bd9a92ee6e14ad29159d0217d0345fd9b2db3d881c4a7d',
    panoptesReturnUrl: 'https://notesfromnature.org/',
  },
};

export const config = Object.assign({}, envConfig[process.env.NODE_ENV]);
