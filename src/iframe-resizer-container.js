/*
	Use inside iframe container
 */
window.addEventListener("message", function(e) {
	var iframes = document.getElementsByTagName('iframe');
	for(var i = 0; i < iframes.length; i++) {
		if(iframes[i].contentWindow === e.source) {
			var height = e.data.split(':')[1];
			iframes[i].style.height = height+'px';
		}
	}
}, false);
