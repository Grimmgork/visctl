# visctl
A webpage wich will display a html-template given by the server without needing to refresh the page.
You can let the server switch the visuals of the client to a template by posting to the /switch[templatename] endpoint.

You can have multiple clients but they wont be synchronized exactly.
If you have GIFs or videos on the template-page they are not guaranteed to start playing exactly at the same time but
it works great for synchronizing static content like text or images.

I use it to display *aesthetic* gifs and videos on a CRT monitor.

## Endpoints:

```
GET           /view                  //the client 
GET           /templates             //list of all available templates to display on the client
GET           /switch                //gets the currently selected template of the client
POST          /switch/[templatename] //switches out the template displayed on the client
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
