//= require "../defs"
//= require "../util"
//= require "base-chart"

/* FILE scatter-plot.js */

/* Seong-June Kim 2010 */

(function () {

    var type = net.yy.google.chart.type;
    var util = net.yy.google.chart.util;

    type.ScatterPlot = function (app) {
        type.ScatterPlot.uber.init.apply(this, [app]);
        this.type = 'lc';
    };

    util.extend(type.ScatterPlot, type.BaseChart, {
    });

})();
