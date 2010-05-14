(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.LegendPositionArea = function () {
        var self = this;

        param.LegendPositionArea.uber.init.apply(this, [{
            area: $('#legend_position_area'),
            enableButton: $('#legend_position_enable_button'),
            enableTargetClass: 'legend_position_enable_target'
        }]);

        this.positionSelector = $('#legend_position_selector');
        this.orderSelector = $('#legend_order_selector');
        this.customOrderArea = $('#legend_custom_order');
        this.customOrderInput = $('#legend_custom_order_input');

        this.customOrderArea.hide();

        this.orderSelector.change(function () {
            var order = $('#legend_order_selector option:selected').attr('value');
            if (order == 'custom') {
                self.customOrderArea.show();
            }
            else {
                self.customOrderArea.hide();
            }
        });

        this.disable();
    };

    util.extend(param.LegendPositionArea, param.BaseOptionalParamArea, {

        getParamString : function () {
            var position = this.getPosition();
            var order = this.getOrder();
            var s = '';

            if (position == 'default') {
                if (order == 'default') {
                    return '';
                }
                else {
                    s = order;
                }
            }
            else if (order == 'default') {
                s = position;
            }
            else {
                s = position + '|' + order;
            }
            return 'chdlp=' + s;
        },

        getPosition: function () {
            return $('#legend_position_selector option:selected').attr('value');
        },

        getOrder: function () {
            var choice = $('#legend_order_selector option:selected').attr('value');
            if (choice == 'custom') {
                return this.customOrderInput.attr('value');
            }
            else {
                return choice;
            }
        }
    });

})();
