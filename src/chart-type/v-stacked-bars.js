//= require "../defs"
//= require "../util"
//= require "base-bar-chart"

/* FILE v-stacked-bars.js */

/* Seong-June Kim 2010 */

(function () {

    var type = net.yy.google.chart.type;
    var util = net.yy.google.chart.util;

    type.VStackedBars = function (app) {
        type.VStackedBars.uber.init.apply(this, [app]);
        this.type = 'lc';
    };

    util.extend(type.VStackedBars, type.BaseBarChart);

})();
