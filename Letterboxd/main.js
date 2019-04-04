const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;





app.on('ready', function() {
    mainWindow = new BrowserWindow({titleBarStyle: 'hidden',
     width: 1281,
     height: 800,
     autoHideMenuBar: true,
     frame: false,
     webPreferences: {
         plugins: true,
         sandbox: true,
         nodeIntegration: false,
     }
     
    });
    
    mainWindow.loadURL('http://www.letterboxd.com');

    

    
})