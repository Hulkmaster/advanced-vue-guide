const app = require('express')();

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  require('./utils/setup-prod.js')(app);
} else {
  require('./utils/setup-dev.js')(app);
}

app.listen(process.env.PORT || 3000);
