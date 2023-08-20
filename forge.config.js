const path = require('path');
const fs = require('fs');
const packageJson = require('./package.json');
const { version } = packageJson;

const isTestBuild = process.env.BUILD_ENV === 'test';

const config = {
  hooks: {
    // generateAssets: require('./build/generateAssets'),
    // postStart: require('./build/postStart'),
  },

  packagerConfig: {
    name: 'Testing',
    executableName: 'Testing',
    asar: false,
    quiet: false,
    appBundleId: 'com.gettrici.trici',
    usageDescription: {
      Camera: 'Access is needed by certain built-in fiddles in addition to any custom fiddles that use the Camera',
      Microphone:
        'Access is needed by certain built-in fiddles in addition to any custom fiddles that use the Microphone',
    },
    appCategoryType: 'public.app-category.developer-tools',
    extendInfo: {
      LSUIElement: true,
    },
    ignore: [
      '.git',
      '.gitignore',
      'forge.config.js',
    ],
  },
  makers: [
    {
      name: '@electron-forge/maker-dmg',
      config: {
        format: 'ULFO',
      },
    },
    {
      name: '@electron-forge/maker-zip',
    },
  ],
};

// Finally, export it
module.exports = config;

