(function () {

    var type = net.yy.google.chart.type;
    var util = net.yy.google.chart.util;

    type.BaseChart = function () {

    };

    type.BaseChart.prototype = {

        init: function (app) {
            this.app = app;
        }
    };

})();
