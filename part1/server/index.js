const Koa = require('koa');

const app = new Koa();
const serve = require('koa-static');
const mount = require('koa-mount');

const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);

app.use(mount('/dist', serve(path.join(__dirname, '../dist'))));

app.use(async (ctx) => {
  ctx.set('Content-Type', 'text/html');
  ctx.body = await readFile(path.join(__dirname, '../index.html'));
});

app.listen(process.env.PORT || 3000);
