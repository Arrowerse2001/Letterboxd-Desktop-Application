const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;




app.on('ready', function() {
    mainWindow = new BrowserWindow({titleBarStyle: 'hidden',
     fullscreen: true,
     autoHideMenuBar: false,
     transparent: true,
     frame: false,
     webPreferences: {
         plugins: true,
         sandbox: true,
         nodeIntegration: false,
         preload: "C:\Users\Iain\Documents\GitHub\Letterboxd-Desktop-Application\Letterboxd\adblock.js"
     }
     
    });
    
    mainWindow.loadURL('http://www.letterboxd.com');  
})