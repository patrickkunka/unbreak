/**
 * jQuery unBreak v1.2.0
 * 
 * @author	Patrick Kunka
 */

$.fn.unBreak = function(min){
	return this.each(function(){
		var el = this,
			minWords = min || 0;
			unBreak = function(node){
				if(node.nodeValue && Array.prototype.indexOf){
					var value = node.nodeValue,
						space = '\u0020',
						totalWords = value.split('\u0020').length,
						index = value.lastIndexOf(space);

					(index > -1 && totalWords >= minWords) && (node.nodeValue = replaceAt(value, index, "\u00A0"));
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