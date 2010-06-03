//= require "../defs"
//= require "../util"
//= require "base-pie-chart"

/* FILE pie-chart.js */

/* Seong-June Kim 2010 */

(function () {

    var type = net.yy.google.chart.type;
    var util = net.yy.google.chart.util;

    type.PieChart = function (app) {
        type.PieChart.uber.init.apply(this, [app]);
        this.type = 'lc';
    };

    util.extend(type.PieChart, type.BasePieChart, {
    });

})();
