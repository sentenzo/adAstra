/*
var script = document.createElement('script');
script.src = "https://sentenzo.github.io/adAstra/adAstra.js";
document.getElementsByTagName('head')[0].appendChild(script);
*/
(function () {
    "use strict";

    this.adAstra = {};

    var clear, loadScript, seed;
    
    seed = Math.random().toString(36).substring(2, 10);

    // clear the stage
    clear = function () {
        var do_killAllChildren, do_clearAttributes, do_killEventListeners;

        do_killAllChildren = function (element) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        };
        do_killEventListeners = function (element) {
            var clone = element.cloneNode(true);
            element.parentNode.replaceChild(clone, element);
            element.replaceWith(element.cloneNode(true));
        };
        do_clearAttributes = function (element) {
            var i, n;
            n = element.attributes.length;
            for (i = 0; i < n; i += 1) {
                element.removeAttribute(element.attributes[0].name);
            }
        };

        do_killAllChildren(document.body);
        do_killAllChildren(document.head);
        do_clearAttributes(document.body);
        do_clearAttributes(document.head);
        do_clearAttributes(document.head.parentNode);
        do_killEventListeners(document.body);
        do_killEventListeners(document.head);
        //do_killEventListeners(document.head.parentNode);
        //history.replaceState("null", "null", 'https://sentenzo.github.io/adAstra/adAstra.html');
    };
    
    
    loadScript = function (url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    };
    
    clear();
    //this.console.log("...");
}).apply(this);
