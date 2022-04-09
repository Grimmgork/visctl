const express = require('express');
const fs = require('fs');
const pth = require('path');
const favicon = require('serve-favicon');

const vbk = require('./view');
const config = require('./config.json');

let app = express();

let state = LoadState();
vbk.SwitchContent(state.template);

app.use(favicon('./static/favicon.ico'));
app.use('/static', express.static('./static'));
app.use('/templates', express.static(config.templates));

function GetSubdirectories(dir){
	return fs.readdirSync(dir).filter((f) => fs.statSync(pth.join(dir, f)).isDirectory);
}

function LoadState(){
	const path = './state.json';
	if(!fs.existsSync(path)){
		return {template: null}
	}
	return require(path);
}

function SaveState(state){
	fs.writeFile('./state.json', JSON.stringify(state), function(){});
}

app.get('/view', function(req, res){
	let content = fs.readFileSync('./static/view/index.html');
	content = content.toString().replaceAll('{WEBSOCKETPORT}', config.wssPort);
	res.send(content);
});

app.get('/templates', function(req, res){
	res.send(GetSubdirectories(config.templates));
});

app.get('/switch', function(req, res){
	res.send(vbk.GetContent());
});

app.post('/switch/:templatename', function(req, res){
	const templatename = req.params.templatename;
	if(GetSubdirectories(config.templates).filter((f) => f == templatename).length == 0){
		res.sendStatus(404);
		return;
	}

	vbk.SwitchContent(templatename);
	state.template = vbk.GetContent();
	SaveState(state);

	res.send();
});

app.listen(5000);