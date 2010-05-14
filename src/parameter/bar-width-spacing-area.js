(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.BarWidthSpacingArea = function () {
        param.BarWidthSpacingArea.uber.init.apply(this, [{
            area: $('#bar_width_spacing_area'),
            enableButton: $('#bar_ws_enable_button'),
            enableTargetClass: 'bar_ws_enable_target'
        }]);
    };

    util.extend(param.BarWidthSpacingArea, param.BaseOptionalParamArea, {

        getParamString : function() {
            var bar_width = strip($('#bar_width_input').attr('value'));
            var bar_space = strip($('#bar_space_input').attr('value'));
            var group_space = strip($('#group_space_input').attr('value'));
            if (bar_width || bar_space || group_space) {
                if (!bar_width) {
                    console.log('bar_width=' + bar_width);
                    bar_width = 20;
                    $('#bar_width_input').attr('value', bar_width);
                }
                if (!bar_space) {
                    bar_space = 0;
                    $('#bar_space_input').attr('value', bar_space);
                }
                if (!group_space) {
                    group_space = 0;
                    $('#group_space_input').attr('value', group_space);
                }
            }
            return 'chbh=' + bar_width + ',' + bar_space + ',' + group_space;
        }

    });

})();
