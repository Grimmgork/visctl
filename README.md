# visctl
A webpage wich content can be replaced in real time.
You can switch the content of the client to a template by posting to the /switch[templatename] endpoint.
The server will then notify all clients to load another template.

You can have multiple clients but they wont be synchronized exactly.
So, if you have GIFs or videos on the template they are not guaranteed to start playing exactly at the same time, but
it works great for synchronizing static content like text or images.

I use it to display *aesthetic* gifs on a CRT monitor. 🪐

## Endpoints:

```
GET           /view                  //the client 
GET           /templates             //list of all available templates to display on the client
GET           /switch                //gets the currently selected template of the client
POST          /switch/[templatename] //switches out the template displayed on the client
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
