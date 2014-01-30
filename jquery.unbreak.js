/**
 * @author
 * jQuery unBreak v1.1.0
 * By Patrick Kunka
 */

$.fn.unBreak = function(){
	return this.each(function(){
		var el = this,
			unBreak = function(el){
				console.info(el);

				if(el.nodeValue && Array.prototype.indexOf){
					var html = el.nodeValue,
						index = html.lastIndexOf(' ');

					el.nodeValue = replaceAt(html, index, "\u00A0");
				}
			},	
			replaceAt = function(str, index, chr){
				if(index > str.length - 1) return str;

				return str.substr(0, index) + chr + str.substr(index + 1);
			},
			findChildren = function(el){
				if(el.childNodes.length){
					var lastChild = el.childNodes[el.childNodes.length - 1];

					!lastChild.childNodes.length ?
						unBreak(lastChild) :
						findChildren(lastChild);
				} else {
					unBreak(el);
				}
			};

		findChildren(el);
	});
};