# visctl

It is basically a webpage wich visuals can be switched by calling a rest endpoint.

I use it to display *aesthetic* gifs and videos on a CRT monitor.

## Endpoints:

```
GET           /view
GET           /templates
GET           /templates/[templatename]/resource
GET           /switch
POST          /switch/[templatename]
```

## Setup:

insert *config.json* file in the directory:
(redirects dont work yet ...)
```
{
	"port": "PORT",
	"wssPort": "PORT",
	"masterapikey": "MASTERAPIKEY",
	"templates": "./templates",
	"redirects": {
		"/redirect": "/redirect/redirect.html",
		"/redirect": "/redirect/redirect.html",
	}
}
```

the templates directory:
```
📁templatename
	index.html
	gif.gif
📁templatename
	index.html
	mov.mov
📁templatename
	index.html
	gif.gif
	image.png
```



*be water my friends!*
