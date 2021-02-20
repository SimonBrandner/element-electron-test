const { desktopCapturer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("JitsiMeetElectron", {
	obtainDesktopStreams() {
		return desktopCapturer.getSources({ types: ['window', 'screen'] });
	}
});
