const electron = require('electron');
const url = require('url');
const path = require('path');



const options = {
  verbose: true,
  logger: console,
};





let mainWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({ width: 800, height: 600}); ({
        webPreferences: {
            plugins: true,
            sandbox: true,
            nodeIntegration: false,
        }
    });

    blockWindowAds(mainWindow, options);


    mainWindow.loadURL('http://www.letterboxd.com');
})


