(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.BaseParamArea = function () {
    };

    param.BaseParamArea.prototype = {
        init: function (args) {
            this.area = args.area;
        },

        show: function () {
            this.visible = true;
            this.area.show();
        },

        hide: function () {
            this.visible = false;
            this.area.hide();
        },

        isEnabled: function () {
            return this.enabled;
        },

        isVisible: function () {
            return this.visible;
        }
    };

})();
