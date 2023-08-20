
const electron = require('electron');

const app = electron.app;
const electronUnhandled = require('electron-unhandled');

electronUnhandled({
  showDialog: false,
  logger: error => {
    console.error('ElectronUnhandled', error);
  },
});

app.on('ready', () => {
    console.log('Hello from Electron');
    });

