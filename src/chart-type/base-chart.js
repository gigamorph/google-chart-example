//= require "../defs"

/* FILE base-chart.js */

/* Seong-June Kim 2010 */

(function () {

    var type = net.yy.google.chart.type;

    type.BaseChart = function () {

    };

    type.BaseChart.prototype = {

        init: function (app) {
            this.app = app;
        }
    };

})();
