# visctl

It is basically a webpage wich visuals can be switched by calling a rest endpoint.
It also provides a small interface for managing templates, permissions and the displayed content of its clients.

I use it to display *aesthetic* gifs and videos on a CRT monitor.

## Endpoints:

```
GET           /view
GET           /templates
GET           /templates/[templatename]/resource
GET, POST     /switch/[templatename]
```

*be water my friends!*