const { desktopCapturer, contextBridge } = require("electron");


/*contextBridge.exposeInMainWorld("JitsiMeetElectron", {
	obtainDesktopStreams(callback, errorCallback, options = {}) {
		desktopCapturer
			.getSources(options)
			.then((sources) => {
				console.log(sources);
				callback(sources);
			})
			.catch((error) => errorCallback(error));
	}
});*/

window.JitsiMeetElectron = {
    obtainDesktopStreams(callback, errorCallback, options = {}) {
		desktopCapturer
			.getSources(options)
			.then((sources) => {
				console.log(sources);
				callback(sources);
			})
			.catch((error) => errorCallback(error));
	}
}
