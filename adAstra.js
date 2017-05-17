/*
var script = document.createElement('script');
script.src = "https://sentenzo.github.io/adAstra/adAstra.js";
document.getElementsByTagName('head')[0].appendChild(script);
*/
(function () {
    "use strict";
    
    this.adAstra = {};
    
    var do_killAllChildren, do_clearAttributes, do_killEventListeners, do_braveNewWorld;
    do_killAllChildren  = function (element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    };
    do_killEventListeners = function (element) {
        var clone = element.cloneNode(true);
        element.parentNode.replaceChild(clone, element);
        element.replaceWith(element.cloneNode(true));
        //var i, key, eventKeys;
        //eventKeys = [];
        //for (key in element) {
        //    if (key.indexOf("on") === 0) {
        //        eventKeys.push(key);
        //    }
        //}
        //for (i = 0; i < eventKeys.length; i += 1) {
        //    element[eventKeys[i]] = undefined;
        //}
    };
    do_clearAttributes = function (element) {
        var i, n;
        n = element.attributes.length;
        for (i = 0; i < n; i += 1) {
            element.removeAttribute(element.attributes[0].name);
        }
    };
    
    do_braveNewWorld = function () {
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
    do_braveNewWorld();
    //this.console.log("...");
}).apply(this);