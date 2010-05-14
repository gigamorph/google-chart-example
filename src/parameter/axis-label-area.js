/*
 * 11/27/2009 Seong-June Kim
 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.AxisLabelArea = function (args) {
        var self = this;

        param.AxisLabelArea.uber.init.apply(this, [{
            area: $('#axis_label_area'),
            enableButton: $('#axis_label_enable_button'),
            enableTargetClass: 'axis_label_enable_target'
        }]);

        var table = new Table($('#axis_label_table'), {
            uniquePrefix: 'axis_label_table',
            enableTargetClass: this.enableTargetClass,
            columnHeaderGen: function(col) {
                if (col === 1) {
                    return 'Axis Index';
                }
                else {
                    return 'Label';
                }
            },
            cellGen: function(row, col) {
                if (col === 1) {
                    return row - 1;
                }
                else if (col == 2) {
                    return 'L' + (col - 1);
                }
                else {
                    return '';
                }
            }
        });

        this.table = table;

        this.addLabelButton = $('#add_axis_label_column_button');
        this.removeLabelButton = $('#remove_axis_label_column_button');
        this.addAxisButton = $('#add_axis_label_row_button');
        this.removeAxisButton = $('#remove_axis_label_row_button');
        this.enableButton = $('#axis_label_enable_button');
        this.addLabelButton.click(function() {
            table.addColumn();
        });
        this.removeLabelButton.click(function() {
            table.removeLastColumn();
        });
        this.addAxisButton.click(function() {
            table.addRow();
        });
        this.removeAxisButton.click(function() {
            table.removeLastRow();
        });
        this.table.addRow();
        this.table.addColumn();
        this.table.addColumn();
        this.disable();
    };

    util.extend(param.AxisLabelArea, param.BaseOptionalParamArea, {

        getParamString : function() {
            var matrix = this.table.data();
            var axisLabels = [];
            for (var rowNum = 0; rowNum < matrix.length; ++rowNum) {
                var row = [];
                var axisNum = matrix[rowNum][0];
                for (var i = 1; i < matrix[rowNum].length; ++i) {
                    if ((/[^\s]/).test(matrix[rowNum][i])) {
                        row.push(matrix[rowNum][i]);
                    }
                }
                axisLabels.push(axisNum + ':' + row.join('|'));
            }
            return 'chxl=' + axisLabels.join('|');
        }

    });

})();
