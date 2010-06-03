//= require "defs"

/* FILE util.js */

/* Seong-June Kim 2010 */

(function () {

    var util = net.yy.google.chart.util;

    util.extend = function (Child, Parent, properties) {
        var F = function () {};
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        if (properties) {
            for (var k in properties) {
                Child.prototype[k] = properties[k];
            }
        }
        Child.prototype.constructor = Child;
        Child.uber = Parent.prototype;
    };

    util.strip = function (str) {
        return str.replace(/^\s+|\s+$/g, '');
    };

})();
