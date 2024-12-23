const {app,BrowserWindow}=require('electron');
const URL = require('url');
const path = require('path');

let mainWindow;

app.on('ready',()=>{
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(URL.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }));
});