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

const hotMiddleware = require('./utils/koa-webpack-hot-middleware')(
  clientCompiler, {
    heartbeat: 5000,
  }
);

app.use(devMiddleware);
app.use(hotMiddleware);

app.use(async (ctx) => {
  ctx.set('Content-Type', 'text/html');
  ctx.body = devMiddleware.fileSystem.readFileSync(path.join(clientConfig.output.path, 'index.html'));
});

app.listen(process.env.PORT || 3000);
