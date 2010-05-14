/*
 * 11/27/2009 Seong-June Kim
 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.MarginArea = function (args) {
        param.MarginArea.uber.init.apply(this, [{
            area: $('#margin_area'),
            enableButton: $('#margin_enable_button'),
            enableTargetClass: 'margin_enable_target'
        }]);

        var self = this;

        this.legendMarginEnabled = false;
        this.legendMarginEnableButton = $('#legend_margin_enable_button');
        this.legendMarginEnableButton.click(function(event) {
            if (self.legendMarginEnabled) {
                $('.legend_margin_enable_target').attr('disabled', true);
                self.legendMarginEnabled = false;
                self.legendMarginEnableButton.text('Enable Legend Margin');
            }
            else {
                $('.legend_margin_enable_target').attr('disabled', false);
                self.legendMarginEnabled = true;
                self.legendMarginEnableButton.text('Disable Legend Margin');
            }
        });
        this.disable();
    };

    util.extend(param.MarginArea, param.BaseOptionalParamArea, {

        disable: function() {
            param.MarginArea.uber.disable.apply(this);
            $('.legend_margin_enable_target').attr('disabled', true);
        },

        enable: function() {
            param.MarginArea.uber.enable.apply(this);
            if (this.legendMarginEnabled) {
                $('.legend_margin_enable_target').attr('disabled', false);
            }
        },

        getParamString : function() {
            var t = [$('#left_margin_input').val(),
                     $('#right_margin_input').val(),
                     $('#top_margin_input').val(),
                     $('#bottom_margin_input').val()].join(',');
            if (this.legendMarginEnabled) {
                t += '|' + $('#legend_width_margin_input').val() + ',' +
                    $('#legend_height_margin_input').val();
            }
            return 'chma=' + t;
        }
    });

})();
