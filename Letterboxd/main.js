const electron = require('electron');
const url = require('url');
const path = require('path');
const { webviewTag } = require('electron');

const { app, BrowserWindow, Menu, ipcMain} = electron;

let win;

app.on('ready', function() {
    win = new BrowserWindow({
    titleBarStyle: 'hidden',
     fullscreen: true,
     autoHideMenuBar: false,
     frame: false,     
     fullscreenWindowTitle: true,
     darkTheme: true,
     webPreferences: {
         plugins: true,
         sandbox: true,
         nodeIntegration: false,       
     }    
});
    win.loadURL("https://www.letterboxd.com/");
});
