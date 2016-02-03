/*
	Use inside iframe content
 */
window.addEventListener('load', function(e) {
	window.addEventListener('resize', function(e){
		var body = document.body;
		var html = document.documentElement;
		var height = Math.max( body.offsetHeight, html.offsetHeight );
		window.parent.postMessage('height:' + height, '*');
	}, false);
	window.dispatchEvent(new UIEvent('resize'));
}, false);
