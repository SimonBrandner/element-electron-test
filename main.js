const { app, BrowserWindow, BrowserView } = require("electron");

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			webviewTag: true,
			contextIsolation: false,
			nodeIntegration: false,
			nodeIntegrationInSubFrames: false
		}
	});
	win.loadURL("file:///home/simon/GIT/Matrix/element-electron-test/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
