(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.TitleStyleArea = function () {
        param.TitleStyleArea.uber.init.apply(this, [{
            area: $('#title_style_area'),
            enableButton: $('#title_style_enable_button'),
            enableTargetClass: 'title_style_enable_target'
        }]);
        this.colorInput = $('#title_style_color_input');
        this.fontSizeInput = $('#title_style_font_size_input');
        this.disable();
    };

    util.extend(param.TitleStyleArea, param.BaseOptionalParamArea, {

        getParamString : function() {
            return 'chts=' + this.colorInput.val() + ',' +
                this.fontSizeInput.val();
        }

    });

})();

