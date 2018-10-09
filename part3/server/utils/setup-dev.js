const webpack = require('webpack');

const path = require('path');

module.exports = (app) => {
  const clientConfig = require('../../webpack.config.dev.js');
  const clientCompiler = webpack(clientConfig);

  const devMiddleware = require('./koa-webpack-dev-middleware')(
    clientCompiler, {
      publicPath: clientConfig.output.publicPath,
    }
  );

  const hotMiddleware = require('./koa-webpack-hot-middleware')(
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
}
