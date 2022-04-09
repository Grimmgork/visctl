# visctl

It is basically a webpage wich visuals can be switched by calling a rest endpoint.

I use it to display *aesthetic* gifs and videos on a CRT monitor.

## Endpoints:

```
GET           /view
GET           /templates
GET           /templates/[templatename]/resource
GET, POST     /switch/[templatename]
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
📁templateA
	📜index.html
	🖼gif.gif
📁templateB
	📜index.html
	🖼gif.gif
📁templateC
	📜index.html
	🖼gif.gif
	🖼gifb.gif
```

*be water my friends!*