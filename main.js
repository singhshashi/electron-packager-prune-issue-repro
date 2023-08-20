
const electron = require('electron');

const app = electron.app;
const electronUnhandled = require('electron-unhandled');

const { hasScreenCapturePermission } = require('mac-screen-capture-permissions');

electronUnhandled({
  showDialog: false,
  logger: error => {
    console.error('ElectronUnhandled', error);
  },
});

app.on('ready', () => {
    console.log('Hello from Electron');
  const hasPermission = hasScreenCapturePermission();
  console.log("hasPermission", hasPermission);
    });

