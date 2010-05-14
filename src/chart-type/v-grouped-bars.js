(function () {

    var type = net.yy.google.chart.type;
    var util = net.yy.google.chart.util;

    type.VGroupedBars = function (app) {
        type.VGroupedBars.uber.init.apply(this, [app]);
        this.type = 'lc';
    };

    util.extend(type.VGroupedBars, type.BaseBarChart);

})();
