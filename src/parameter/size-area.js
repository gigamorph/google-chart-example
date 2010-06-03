//= require "../defs"
//= require "../util"
//= require "base-param-area"

/* FILE size-area.js */

/* Seong-June Kim 2010 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.SizeArea = function () {
        param.SizeArea.uber.init.apply(this, [{
            area: $('#size_area')
        }]);
        this.enabled = true;
        this.width = $('#width');
        this.height = $('#height');
    };

    util.extend(param.SizeArea, param.BaseParamArea, {

        getParamString : function() {
            return 'chs=' + this.width.attr('value') + 'x' + this.height.attr('value');
        }

    });

})();
