//= require "../defs"
//= require "../util"
//= require "base-optional-param-area"

/* FILE pie-orientation-area.js */

/* Seong-June Kim 2010 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.PieOrientationArea = function () {
        param.PieOrientationArea.uber.init.apply(this, [{
            area: $('#pie_orient_area'),
            enableButton: $('#pie_orient_enable_button'),
            enableTargetClass: 'pie_orient_enable_target'
        }]);
        this.input = $('#pie_orient_input');
        this.disable();
    };

    util.extend(param.PieOrientationArea, param.BaseOptionalParamArea, {

        getParamString : function() {
            return 'chp=' + this.input.attr('value');
        }

    });

})();
