//= require "../defs"
//= require "../util"
//= require "base-param-area"

/* FILE base-optional-param-area.js */

/* Seong-June Kim 2010 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.BaseOptionalParamArea = function (args) {
    };

    util.extend(param.BaseOptionalParamArea, param.BaseParamArea, {

        init: function (args) {
            param.BaseOptionalParamArea.uber.init.apply(this, [{ area: args.area }]);

            var self = this;

            this.enableButton = args.enableButton;
            this.enableTargetClass = args.enableTargetClass;

            this.enableButton.click(function () {
                if (self.enabled) {
                    self.disable();
                }
                else {
                    self.enable();
                }
            });
        },

        disable: function () {
            $('.' + this.enableTargetClass).attr('disabled', true);
            this.enabled = false;
            this.enableButton.text('Enable');
        },

        enable: function () {
            $('.' + this.enableTargetClass).attr('disabled', false);
            this.enabled = true;
            this.enableButton.text('Disable');
        }

    });

})();
