/*
 * 11/27/2009 Seong-June Kim
 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.GradientFillsArea = function (args) {
        var self = this;

        param.GradientFillsArea.uber.init.apply(this, [{
            area: $('#gradient_fills_area'),
            enableButton: $('#gradient_fills_enable_button'),
            enableTargetClass: 'gradient_fills_enable_target'
        }]);

        var table = new Table($('#gradient_fills_table'), {
            uniquePrefix: 'gradient_fills_table',
            enableTargetClass: this.enableTargetClass,
            columnHeaderGen: function (col) {
                if (col < 3) {
                    return ['Fill Type', 'Angle'][col-1];
                }
                else if (col % 2 == 1){
                    return 'Color ' + (col - 1) / 2;
                }
                else {
                    return 'Center Point ' + (col - 2) / 2;
                }
            },
            cellGen: function (row, col) {
                if (col == 1) {
                    return 'bg';
                }
                else if (col == 2) {
                    return '0';
                }
                else if (col % 2 == 1) {
                    var colors = net.yy.google.chart.colors;
                    return colors[Math.floor(Math.random() * colors.length)];
                }
                else if (col == 4){
                    return '0';
                }
                else if (col == 6) {
                    return '1';
                }
                else {
                    return '0';
                }
            },
            minCols: 6
        });

        this.table = table;

        this.addColumnButton = $('#add_gradient_fills_column_button');
        this.removeColumnButton = $('#remove_gradient_fills_column_button');
        this.addRowButton = $('#add_gradient_fills_row_button');
        this.removeRowButton = $('#remove_gradient_fills_row_button');
        this.enableButton = $('#gradient_fills_enable_button');

        this.addColumnButton.click(function () {
            table.addColumn();
            table.addColumn();
        });
        this.removeColumnButton.click(function () {
            table.removeLastColumn();
            table.removeLastColumn();
        });
        this.addRowButton.click(function () {
            table.addRow();
        });
        this.removeRowButton.click(function () {
            table.removeLastRow();
        });

        this.table.addRow();
        for (var i = 0; i < 6; ++i) {
            this.table.addColumn();
        }

        this.disable();
    };

    util.extend(param.GradientFillsArea, param.BaseOptionalParamArea, {

        getParamString : function () {
            var row = this.table.data()[0];
            var list = [];

            for (var i = 1; i < row.length; ++i) {
                list.push(row[i]);
            }
            return row[0] + ',lg,' + list.join(',');
        }

    });

})();
