//= require "../defs"
//= require "../util"
//= require "base-pie-chart"

/* FILE pie-concentric.js */

/* Seong-June Kim 2010 */

(function () {

    var type = net.yy.google.chart.type;
    var util = net.yy.google.chart.util;

    type.PieConcentric = function (app) {
        type.PieConcentric.uber.init.apply(this, [app]);
        this.type = 'lc';
    };

    util.extend(type.PieConcentric, type.BasePieChart, {
    });

})();
