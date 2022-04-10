const express = require('express');
const fs = require('fs');
const pth = require('path');
const favicon = require('serve-favicon');
const mime = require('mime-types');

const vbk = require('./view');

const config = require(process.argv[2] || './config.json');

let app = express();

vbk.SwitchContent(config.defaultTemplate);

app.use(favicon('./static/favicon.ico'));
app.use(TemplateManager);
app.use('/static', express.static('./static'));


function TemplateManager (req, res, next){
	const templateDirectory = config.templates;
	let path = pth.normalize(req.path).replaceAll(/^\/|\/$/g,'').split("/");

	if(path[0] == 'templates'){
		path.shift();
		path = pth.join(templateDirectory, path.join("/"));

		if(req.method == 'GET'){
			if(fs.existsSync(path)){
				if(fs.lstatSync(path).isDirectory()){
					res.send(fs.readdirSync(path).sort(function(a,b){
						const ad = fs.lstatSync(pth.join(path, a)).isDirectory();
						const bd = fs.lstatSync(pth.join(path, b)).isDirectory();
						if(bd == ad)
							return 0;
						if(bd)
							return 1;
						return -1;
					}));
					return;
				}
				else{
					res.setHeader("Content-Type", mime.lookup(path));
					res.send(fs.readFileSync(path));
					return;
				}
			}
			else
			{
				res.sendStatus(404);
				return;
			}
		}
		else
		if(req.method == 'POST'){
			const requestBody = [];
      		req.on('data', (chunks)=>{
				requestBody.push(chunks);
      		});

			req.on('end', ()=>{
				const data = Buffer.concat(requestBody).toString();
				fs.writeFileSync(path, data);
		  	});
			res.send();
			return;
		}
	}
	next();
}

function GetSubdirectories(dir){
	return fs.readdirSync(dir).filter((f) => fs.lstatSync(pth.join(dir, f)).isDirectory());
}

app.get('/view', function(req, res){
	let content = fs.readFileSync('./static/view/index.html');
	content = content.toString().replaceAll('{WEBSOCKETPORT}', config.wssPort);
	res.send(content);
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
	res.send();
});

app.listen(5000);