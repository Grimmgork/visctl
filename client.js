const config = require('./config.json');
const WebSocket = require('ws');

let WSSPORT = config.wssPort;
let content;

const wss = new WebSocket.Server({ port: WSSPORT });
const sockets = [];

wss.on('connection', (ws) => {
	sockets.push(ws);
	if(content)
		ws.send(content);

	ws.on('message', (message) => {});
	ws.on('close', () => {
		sockets.filter((s) => s != ws);
	})
});

function SwitchContent(cont){
	content = cont;
	sockets.forEach(function(client){
		client.send(content);
	});
}

function GetContent(){
	return content;
}

exports.SwitchContent = SwitchContent
exports.GetContent = GetContent