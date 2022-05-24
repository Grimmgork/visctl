# visctl

It is basically a webpage wich visuals can be switched by calling a rest endpoint.

I use it to display *aesthetic* gifs and videos on a CRT monitor.

## Endpoints:

```
GET           /view
GET           /templates
GET           /templates/[templatename]/[resource]
POST          /templates/[templatename]/[resource]
DELETE        /templates/[templatename]/[resource]
GET           /switch
POST          /switch/[templatename]
```

## Setup:

insert *config.json* file in the directory:
```
{
	"port": "PORT",
	"wssPort": "Websocket-PORT",
	"defaultTemplate": "noise",
	"templateDirectory": "./templates"
}
```

## Templates:
All templates must be stoired in the "templateDirectory" folder specified in the config file.
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