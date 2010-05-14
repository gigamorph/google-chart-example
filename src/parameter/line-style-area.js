/*
 * 11/27/2009 Seong-June Kim
 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.LineStyleArea = function (args) {
        param.LineStyleArea.uber.init.apply(this, [{
            area: $('#line_style_area'),
            enableButton: $('#line_style_enable_button'),
            enableTargetClass: 'line_style_enable_target'
        }]);

        var table = new Table($('#line_style_table'), {
            uniquePrefix: 'line_style_table',
            enableTargetClass: this.enableTargetClass,
            rowHeaderGen: function (row) {
                return 'Line ' + row;
            },
            columnHeaderGen: function (col) {
                return ['Thickness', 'Dash Length', 'Space Length'][col-1];
            },
            cellGen: function (row, col) {
                switch (col) {
                    case 1: return '1'; 
                    case 2: return '1';
                    case 3: return '0';
                    default: return '1';
                }
            }
        });

        this.table = table;

        this.addLineButton = $('#add_line_style_button');
        this.removeLineButton = $('#remove_line_style_button');
        this.enableButton = $('#line_style_enable_button');

        this.addLineButton.click(function () {
            table.addRow();
        });
        this.removeLineButton.click(function () {
            table.removeLastRow();
        });
        this.table.addRow();
        this.table.addColumn();
        this.table.addColumn();
        this.table.addColumn();

        this.disable();
    };

    util.extend(param.LineStyleArea, param.BaseOptionalParamArea, {

        getParamString: function () {
            var matrix = this.table.data();
            var lines = [];

            for (var row = 0; row < matrix.length; ++row) {
                lines.push(matrix[row].join(','));
            }
            return 'chls=' + lines.join('|');
        }

    });

})();
