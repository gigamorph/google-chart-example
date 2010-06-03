//= require "../defs"
//= require "../util"
//= require "base-line-chart"

/* FILE xy-lines.js */

/* Seong-June Kim 2010 */

(function () {

    var type = net.yy.google.chart.type;
    var util = net.yy.google.chart.util;

    type.XyLines = function (app) {
        type.XyLines.uber.init.apply(this, [app]);
        this.type = 'lc';
    };

    util.extend(type.XyLines, type.BaseLineChart);

})();
