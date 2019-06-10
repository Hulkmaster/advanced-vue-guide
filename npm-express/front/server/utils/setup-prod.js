const fs = require('fs');
const path = require('path');
const util = require('util');

const {
  static
} = require('express');

const readFile = util.promisify(fs.readFile);

module.exports = (app) => {
  app.use('/dist', static(path.join(__dirname, '../../dist')));

  app.use(async (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(await readFile(path.join(__dirname, '../../dist/index.html')));
  });
};
