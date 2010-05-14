(function () {

    var type = net.yy.google.chart.type;
    var util = net.yy.google.chart.util;

    type.HGroupedBars = function (app) {
        type.HGroupedBars.uber.init.apply(this, [app]);
        this.type = 'bhg';
    };

    util.extend(type.HGroupedBars, type.BaseBarChart);

})();
