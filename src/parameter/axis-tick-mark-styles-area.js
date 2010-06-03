//= require "../defs"
//= require "../util"
//= require "../table"
//= require "base-optional-param-area"

/* FILE axis-tick-mark-styles-area.js */

/* Seong-June Kim 2010 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.AxisTickMarkStylesArea = function (args) {
        var self = this;

        param.AxisTickMarkStylesArea.uber.init.apply(this, [{
            area: $('#axis_tick_mark_styles_area'),
            enableButton: $('#axis_tick_mark_styles_enable_button'),
            enableTargetClass: 'axis_tick_mark_styles_enable_target'
        }]);

        var table = new Table($('#axis_tick_mark_styles_table'), {
            uniquePrefix: 'axis_tick_mark_styles_table',
            enableTargetClass: this.enableTargetClass,
            columnHeaderGen: function(col) {
                if (col === 1) {
                    return 'Axis Index';
                }
                else {
                    return 'Tick Length';
                }
            },
            cellGen: function(row, col) {
                if (col === 1) {
                    return row - 1;
                }
                else if (col == 2) {
                    return '10';
                }
                else {
                    return '';
                }
            }
        });

        this.table = table;

        this.addColumnButton = $('#add_axis_tick_mark_styles_column_button');
        this.removeColumnButton = $('#remove_axis_tick_mark_styles_column_button');
        this.addRowButton = $('#add_axis_tick_mark_styles_row_button');
        this.removeRowButton = $('#remove_axis_tick_mark_styles_row_button');
        this.enableButton = $('#axis_tick_mark_styles_enable_button');
        this.addColumnButton.click(function() {
            table.addColumn();
        });
        this.removeColumnButton.click(function() {
            table.removeLastColumn();
        });
        this.addRowButton.click(function() {
            table.addRow();
        });
        this.removeRowButton.click(function() {
            table.removeLastRow();
        });
        this.table.addRow();
        this.table.addColumn();
        this.table.addColumn();
        this.disable();
    };

    util.extend(param.AxisTickMarkStylesArea, param.BaseOptionalParamArea, {

        getParamString : function() {
            var matrix = this.table.data();
            var rows = [];
            for (var rowNum = 0; rowNum < matrix.length; ++rowNum) {
                var row = [];
                for (var i = 0; i < matrix[rowNum].length; ++i) {
                    if ((/[^\s]/).test(matrix[rowNum][i])) {
                        row.push(matrix[rowNum][i]);
                    }
                }
                rows.push( row.join(','));
            }
            return 'chxtc=' + rows.join('|');
        }

    });

})();
