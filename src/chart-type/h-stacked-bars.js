(function () {

    var type = net.yy.google.chart.type;
    var util = net.yy.google.chart.util;

    type.HStackedBars = function (app) {
        type.HStackedBars.uber.init.apply(this, [app]);
        this.type = 'bhs';
    };

    util.extend(type.HStackedBars, type.BaseBarChart);

})();
