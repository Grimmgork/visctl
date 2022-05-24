const express = require('express');
const fs = require('fs');
const pth = require('path');
const favicon = require('serve-favicon');

const client = require('./client');

const config = require(process.argv[2] || './config.json');

let app = express();

client.SwitchContent(config.defaultTemplate);

app.use(favicon('./static/favicon.ico'));
app.use('/templates', express.static(config.templateDirectory));
app.use('/static', express.static('./static'));

//gets all directory names in Templates-Directory. Ignores hidden folders starting with "."
function GetTemplatenames(){
	const dir = config.templateDirectory;
	return fs.readdirSync(dir).filter((f) => fs.lstatSync(pth.join(dir, f)).isDirectory() && f.charAt(0) != '.');
}

app.get('/view', function(req, res){
	let content = fs.readFileSync('./static/client/index.html').toString();
	content = content.replaceAll('{WEBSOCKETPORT}', config.wssPort);
	res.send(content);
});

app.get('/templates', function(req, res){
	res.send(GetTemplatenames());
});

app.get('/switch', function(req, res){
	res.send(client.GetContent());
});

app.post('/switch/:templatename', function(req, res){
	const templatename = req.params.templatename;
	if(GetTemplatenames().filter((f) => f == templatename).length == 0){
		res.sendStatus(404);
		return;
	}
	
	client.SwitchContent(templatename);
	res.send();
});

app.listen(5000);