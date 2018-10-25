// openChromium.js

const opn = require('opn');
const port = process.env.PORT ? (process.env.PORT) : 3000;

opn('--app=http://localhost:' + port, {app: ['chromium-browser', '--start-fullscreen']});

