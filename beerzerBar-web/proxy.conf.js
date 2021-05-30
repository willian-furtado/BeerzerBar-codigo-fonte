const PROXY_CONFIG =[
  {
    context: ['/api'],
    target: 'http://localhost/',
    secure: false,
    logLevel: 'debug',
    pathRewrite: {'^/api': '' }
  }
 ];

 module.exports = PROXY_CONFIG;
