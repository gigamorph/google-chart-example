(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.TypeArea = function () {
        param.TypeArea.uber.init.apply(this, [{
            area: $('#type_area')
        }]);
        this.enabled = true;
        this.selectorId = 'type_selector';
    };

    util.extend(param.TypeArea, param.BaseParamArea, {

        getParamString : function() {
            return 'cht=' + $('#' + this.selectorId + ' option:selected').attr('value');
        }

    });

})();

