/**
 * UnBreak v2.0.0
 * 
 * @author	Patrick Kunka
 */

(function(window) {
    'use strict';

    var UnBreak = function(node) {
        this.minWords = 0;

        this.init(node);
    };

    UnBreak.prototype = {
        constructor: UnBreak,

        unBreak: function(node) {
            var self = this;

            if (node.nodeValue && Array.prototype.indexOf) {
                var value = node.nodeValue,
                    space = '\u0020',
                    totalWords = value.split('\u0020').length,
                    index = value.lastIndexOf(space);

                (index > -1 && totalWords >= self.minWords) && (node.nodeValue = self.replaceAt(value, index, "\u00A0"));
            }
        },

        replaceAt: function(str, index, chr) {
            if (index > str.length - 1) return str;

            return str.substr(0, index) + chr + str.substr(index + 1);
        },

        findChildren: function(node) {
            var self = this;

            if (node.childNodes.length){
                var lastChild = node.childNodes[node.childNodes.length - 1];

                !lastChild.childNodes.length ?
                    self.unBreak(lastChild) :
                    self.findChildren(lastChild);
            } else {
                unBreak(node);
            }
        },

        init: function(node) {
            var self = this;
            
            self.minWords = (node.getAttribute('data-min') * 1) || 0;

            self.findChildren(node);
        }
    };

    window.UnBreak = UnBreak;
})(window);