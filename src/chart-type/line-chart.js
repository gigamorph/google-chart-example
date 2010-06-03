//= require "../defs"
//= require "../util"
//= require "base-line-chart"

/* FILE line-chart.js */

/* Seong-June Kim 2010 */

(function () {

    var type = net.yy.google.chart.type;
    var util = net.yy.google.chart.util;

    type.LineChart = function (app) {
        type.LineChart.uber.init.apply(this, [app]);
        this.type = 'lc';
    };

    util.extend(type.LineChart, type.BaseLineChart, {
    });

})();
