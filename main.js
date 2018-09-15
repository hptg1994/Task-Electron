const electron = require("electron");

const {app, BrowserWindow,Tray } = electron;

const path = require("path");

let mainWindow

console.log(__dirname)

app.on('ready',() => {
  mainWindow = new BrowserWindow({width:300,height:500, frame:false,resizable:false, show:false });
  mainWindow.loadURL(`file://${__dirname}/public/index.html`)

  const iconName = process.platform === "win32" ? "windows-icon.png":"iconTemplate.png";
  const iconPath = path.join(__dirname,`./src/assets/${iconName}`);
  tray = new Tray(iconPath);
  tray.on("click",(event, bounds) => {

    //  click position x,y coordinate
    const {x,y} = bounds;
    //  Window height and width
    const { height,width} = mainWindow.getBounds();

    mainWindow.getBounds();
    if(mainWindow.isVisible()){
      mainWindow.hide();
    }else {
      mainWindow.setBounds({
        x:x - width/2,
        y:y,
        height:height,
        width:width

      });
      mainWindow.show()
    }
  });
});