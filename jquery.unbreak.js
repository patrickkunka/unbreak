/**
 * @author
 * jQuery unBreak v1.1.1
 * By Patrick Kunka
 */

$.fn.unBreak = function(){
	return this.each(function(){
		var el = this,
			unBreak = function(node){
				if(node.nodeValue && Array.prototype.indexOf){
					var value = node.nodeValue,
						index = value.lastIndexOf('\u0020');

					(index > -1) && (node.nodeValue = replaceAt(value, index, "\u00A0"));
				}
			},	
			replaceAt = function(str, index, chr){
				if(index > str.length - 1) return str;

				return str.substr(0, index) + chr + str.substr(index + 1);
			},
			findChildren = function(node){
				if(node.childNodes.length){
					var lastChild = node.childNodes[node.childNodes.length - 1];

					!lastChild.childNodes.length ?
						unBreak(lastChild) :
						findChildren(lastChild);
				} else {
					unBreak(node);
				}
			};

		findChildren(el);
	});
};