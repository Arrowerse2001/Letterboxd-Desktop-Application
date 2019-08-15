const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain, icon } = electron;

let mainWindow;





app.on('ready', function() {
    mainWindow = new BrowserWindow({titleBarStyle: 'hidden',
     fullscreen: true,
     autoHideMenuBar: false,
     autoHideMenuBar: false,
     transparent: true,
     frame: false,
     sidebar: false,
     fullscreenWindowTitle: true,
     webPreferences: {
         plugins: true,
         sandbox: true,
         nodeIntegration: false,
         
     }
     
    });
    
    mainWindow.loadURL('http://letterboxd.com');
});
