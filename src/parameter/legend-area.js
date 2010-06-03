//= require "../defs"
//= require "../util"
//= require "../table"
//= require "base-optional-param-area"

/* FILE legend-area.js */

/* Seong-June Kim 2010 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.LegendArea = function (args) {
        param.LegendArea.uber.init.apply(this, [{
            area: $('#legend_area'),
            enableButton: $('#legend_enable_button'),
            enableTargetClass: 'legend_enable_target'
        }]);

        var table = new Table($('#legend_area_table'), {
            uniquePrefix: 'legend_table',
            enableTargetClass: this.enableTargetClass,
            columnHeaderGen: function (col) {
                return 'Series ' + col;
            },
            cellGen: function (row, col) {
                return 'Series ' + col;
            }
        });

        this.table = table;

        this.addLegendButton = $('#add_legend_button');
        this.removeLegendButton = $('#remove_legend_button');

        this.addLegendButton.click(function () {
            table.addColumn();
        });
        this.removeLegendButton.click(function () {
            table.removeLastColumn();
        });

        this.table.addRow();
        this.table.addColumn();

        this.disable();
    };

    util.extend(param.LegendArea, param.BaseOptionalParamArea, {

        getParamString : function () {
            var legends = this.table.data()[0];
            return 'chdl=' + legends.join('|');
        }
    });

})();
