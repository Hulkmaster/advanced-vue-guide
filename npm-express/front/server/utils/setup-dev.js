const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const path = require('path');

module.exports = (app) => {
  const clientConfig = require('../../webpack.config.dev.js');
  const clientCompiler = webpack(clientConfig);

  const devMiddleware = webpackDevMiddleware(
    clientCompiler, {
      publicPath: clientConfig.output.publicPath,
    }
  );

  const hotMiddleware = webpackHotMiddleware(
    clientCompiler, {
      heartbeat: 5000,
    }
  );

  app.use(devMiddleware);
  app.use(hotMiddleware);

  app.use(async (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(
      devMiddleware.fileSystem.readFileSync(
        path.join(clientConfig.output.path, 'index.html')
      )
    );
  });
};
