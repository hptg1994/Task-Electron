const electron = require("electron");

const {app, BrowserWindow} = electron;

let mainWindow

console.log(__dirname)

app.on('ready',() => {
  mainWindow = new BrowserWindow({width:1280,height:720,titleBarStyle:"hidden"});
  mainWindow.loadURL(`file://${__dirname}/public/index.html`)
});