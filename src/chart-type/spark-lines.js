(function () {

    var type = net.yy.google.chart.type;
    var util = net.yy.google.chart.util;

    type.SparkLines = function (app) {
        type.SparkLines.uber.init.apply(this, [app]);
        this.type = 'lc';
    };

    util.extend(type.SparkLines, type.BaseLineChart);

})();
