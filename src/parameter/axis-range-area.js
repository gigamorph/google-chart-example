//= require "../defs"
//= require "../util"
//= require "../table"
//= require "base-optional-param-area"

/* FILE axis-range-area.js */

/* Seong-June Kim 2010 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.AxisRangeArea = function (args) {
        param.AxisRangeArea.uber.init.apply(this, [{
            area: $('#axis_range_area'),
            enableButton: $('#axis_range_enable_button'),
            enableTargetClass: 'axis_range_enable_target'
        }]);

        var table = new Table($('#axis_range_table'), {
            uniquePrefix: 'axis_range_table',
            enableTargetClass: this.enableTargetClass,
            columnHeaderGen: function(col) {
                return ['Axis Index', 'Start Value', 'End Value', 'Step'][col-1];
            },
            cellGen: function(row, col) {
                return [row - 1, '0', '100', ''][col-1];
            }
        });

        this.table = table;

        this.addButton = $('#add_axis_range_button');
        this.removeButton = $('#remove_axis_range_button');
        this.enableButton = $('#axis_range_enable_button');

        this.addButton.click(function() {
            table.addRow();
        });
        this.removeButton.click(function() {
            table.removeLastRow();
        });
        this.table.addRow();
        this.table.addColumn();
        this.table.addColumn();
        this.table.addColumn();
        this.table.addColumn();

        this.disable();
    };

    util.extend(param.AxisRangeArea, param.BaseOptionalParamArea, {

        getParamString : function() {
            var matrix = this.table.data();
            var lines = [];
            var vals;

            for (var row = 0; row < matrix.length; ++row) {
                vals = [];
                for (var i = 0; i < matrix[row].length - 1; ++i) {
                    vals.push(matrix[row][i]);
                }
                if (matrix[row][3] !== '') {
                    vals.push(matrix[row][3]);
                }
                lines.push(vals.join(','));
            }
            return 'chxr=' + lines.join('|');
        }

    });

})();
