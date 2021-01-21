const RPC = require("discord-rpc")
const rpc = new RPC.Client({
	transport: "ipc"
})

rpc.on("ready", () => {
	rpc.setActivity({
		state: "Your text...",
		startTimestap: new Date(),
		largeImageKey: "icon",
		smallImageKey: "testing",
		smallImageText: "Your text..."
	})
	
	console.log("Loaded...")
})

rpc.login({
	clientId: ("YourID")
})