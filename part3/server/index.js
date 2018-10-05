const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');
const webpack = require('webpack');

const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const app = new Koa();

const clientConfig = require('../webpack.config.dev.js');
const clientCompiler = webpack(clientConfig);

const devMiddleware = require('./utils/koa-webpack-dev-middleware')(
  clientCompiler, {
    publicPath: clientConfig.output.publicPath,
  }
);

app.use(async (ctx, next) => {
  next();
});

app.use(devMiddleware);

app.use(async (ctx) => {
  console.log('try');
  ctx.set('Content-Type', 'text/html');
  ctx.body = devMiddleware.fileSystem.readFileSync(path.join(clientConfig.output.path, 'index.html'));
});

app.listen(process.env.PORT || 3000);
