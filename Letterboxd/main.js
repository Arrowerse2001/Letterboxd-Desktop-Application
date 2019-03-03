const electron = require('electron');
const url = require('url');
const path = require('path');
const naiveImage = electron.nativeImage;



const { app, BrowserWindow, Menu, ipcMain } = electron;





let mainWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({ 
        webPreferences: {
            plugins: true,
            sandbox: true,
            nodeIntegration: false,
        }
    });

   

    mainWindow.loadURL('http://www.letterboxd.com');

    mainWindow.on('closed', function(){
        app.quit();
    });

    
})


