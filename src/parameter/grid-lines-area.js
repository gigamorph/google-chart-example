/*
 * 11/27/2009 Seong-June Kim
 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.GridLinesArea = function (args) {
        param.GridLinesArea.uber.init.apply(this, [{
            area: $('#grid_lines_area'),
            enableButton: $('#grid_lines_enable_button'),
            enableTargetClass: 'grid_lines_enable_target'
        }]);

        var table = new Table($('#grid_lines_table'), {
            uniquePrefix: 'grid_lines_table',
            enableTargetClass: this.enableTargetClass,
            columnHeaderGen: function (col) {
                return ['X-Axis Step Size', 'Y-Axis Step Size', 'Dash Length', 'Space Length', 'X Offset', 'Y Offset'][col-1];
            },
            cellGen: function (row, col) {
                return ['20', '20', '', '', '', ''][col-1];
            }
        });

        this.table = table;

        this.table.addRow();
        for (var i = 0; i < 6; ++i) {
            this.table.addColumn();
        }

        this.disable();
    };

    util.extend(param.GridLinesArea, param.BaseOptionalParamArea, {

        getParamString : function () {
            var row = this.table.data()[0];
            var vals = [];
            var i, j;

            vals.push(row[0]);
            vals.push(row[1]);

            for (i = 2; i < row.length - 1; ++i) {
                if (!row[i]) {
                    break;
                }
                else {
                    vals.push(row[i]);
                }
            }
            return 'chg=' + vals.join(',');
        }

    });

})();
