(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.BackgroundFillsArea = function (solid, gradient, striped) {
        this.solid = solid;
        this.gradient = gradient;
        this.striped = striped;
    };

    param.BackgroundFillsArea.prototype = {
        show: function () {
            this.solid.show();
            this.gradient.show();
            this.striped.show();
        },

        hide: function () {
            this.solid.show();
            this.gradient.show();
            this.striped.show();
        },

        getParamString : function () {
            var strs = [];
            var s = '';
            if (this.solid.isEnabled()) {
                s = this.solid.getParamString();
                if (s) {
                    strs.push(s);
                }
            }
            if (this.gradient.isEnabled()) {
                s = this.gradient.getParamString();
                if (s) {
                    strs.push(s);
                }
            }
            if (this.striped.isEnabled()) {
                s = this.striped.getParamString();
                if (s) {
                    strs.push(s);
                }
            }
            return 'chf=' + strs.join('|');
        },

        isEnabled: function () {
            return this.solid.isEnabled() || this.gradient.isEnabled() ||
                this.striped.isEnabled();
        },

        isVisible: function () {
            return this.solid.isVisible() || this.gradient.isVisible() ||
            this.striped.isVisible();
        }
    };

})();
