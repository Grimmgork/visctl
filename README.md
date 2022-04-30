# visctl
A webpage wich will display a html-template given by the server.
You can let the server switch the visuals of the client to a template posting to the /switch[templatename] endpoint.

I use it to display *aesthetic* gifs and videos on a CRT monitor.

## Endpoints:

```
GET           /view
GET           /templates
GET           /switch
POST          /switch/[templatename]
```

## Setup:

insert *config.json* file in the directory:
(the api-key does not work yet ...)
```
{
	"port": "PORT",
	"wssPort": "Websocket-PORT",
	"masterapikey": "KEY",
	"defaultTemplate": "noise",
	"templateDirectory": "./templates"
}
```

## Templates:
All templates must be held in the "templateDirectory" folder specified in the config file.
Every Template must have a index.html in its root directory:
```
📂templates
   📁templatename
      📄index.html
      📄gif.gif
   📁templatename
      📄index.html
      📄mov.mov
   📁templatename
      📄index.html
      📄gif.gif
      📄image.png
```

*be water my friends!*
