//= require "../defs"
//= require "../util"
//= require "base-pie-chart"

/* FILE pie-3d.js */

/* Seong-June Kim 2010 */

(function () {

    var type = net.yy.google.chart.type;
    var util = net.yy.google.chart.util;

    type.Pie3D = function (app) {
        type.Pie3D.uber.init.apply(this, [app]);
        this.type = 'lc';
    };

    util.extend(type.Pie3D, type.BasePieChart, {
    });

})();
