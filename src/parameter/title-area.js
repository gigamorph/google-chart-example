//= require "../defs"
//= require "../util"
//= require "base-optional-param-area"

/* FILE title-area.js */

/* Seong-June Kim 2010 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.TitleArea = function () {
        param.TitleArea.uber.init.apply(this, [{
            area: $('#title_area'),
            enableButton: $('#title_enable_button'),
            enableTargetClass: 'title_enable_target'
        }]);
        this.input = $('#title_input');
        this.input.val('Title');
        this.disable();
    };

    util.extend(param.TitleArea, param.BaseOptionalParamArea, {

        getParamString : function() {
            return 'chtt=' + this.input.attr('value');
        }

    });

})();
