# iframe-resizer (cross domain)

## How to use

Extract these files :

`bin/iframe-resizer.min.js`

`bin/iframe-resizer-container.min.js`

### Inside iframe 
```html
<script src="iframe-resizer.min.js"></script>
<script>
  var iframeResizer = new IframeResizer("http://example.com");
</script>
```
`http://example.com` being the domain of the iframe (authorized origin)

### Inside the page containing the iframe 
```html
<script src="iframe-resizer-container.min.js"></script>
```
