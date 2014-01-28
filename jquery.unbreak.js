/**
 * jQuery unBreak v1.0.2
 */

$.fn.unBreak = function(){
	return this.each(function(){
		var el = this,
			unBreak = function(el){
				if(el.innerHTML && Array.prototype.indexOf){
					var html = el.innerHTML,
						index = html.lastIndexOf(' ');

					el.innerHTML = replaceAt(html, index, '&nbsp;');
				}
			},	
			replaceAt = function(str, index, chr){
				if(index > str.length - 1) return str;

				return str.substr(0, index) + chr + str.substr(index + 1);
			},
			findChildren = function(el){
				var children = el.children;

				if(children.length){
					for(var i = 0; i < children.length; i++){
						var child = el.children[i],
							children = child.children;

						!child.children.length ?
							unBreak(child) :
							findChildren(child);
					}
				} else {
					unBreak(el);
				}
			};

		findChildren(el);
	});
};
