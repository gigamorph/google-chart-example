/*
 * 11/27/2009 Seong-June Kim
 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.StripedFillsArea = function (args) {
        var self = this;

        param.StripedFillsArea.uber.init.apply(this, [{
            area: $('#striped_fills_area'),
            enableButton: $('#striped_fills_enable_button'),
            enableTargetClass: 'striped_fills_enable_target'
        }]);

        var table = new Table($('#striped_fills_table'), {
            uniquePrefix: 'striped_fills_table',
            enableTargetClass: this.enableTargetClass,
            columnHeaderGen: function(col) {
                if (col < 3) {
                    return ['Fill Type', 'Angle'][col-1];
                }
                else if (col % 2 == 1){
                    return 'Color ' + (col - 1) / 2;
                }
                else {
                    return 'Width ' + (col - 2) / 2;
                }
            },
            cellGen: function(row, col) {
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
                else {
                    return '20';
                }
            },
            minCols: 6
        });

        this.table = table;

        this.addColumnButton = $('#add_striped_fills_column_button');
        this.removeColumnButton = $('#remove_striped_fills_column_button');
        this.addRowButton = $('#add_striped_fills_row_button');
        this.removeRowButton = $('#remove_striped_fills_row_button');
        this.enableButton = $('#striped_fills_enable_button');

        this.addColumnButton.click(function() {
            table.addColumn();
            table.addColumn();
        });
        this.removeColumnButton.click(function() {
            table.removeLastColumn();
            table.removeLastColumn();
        });
        this.addRowButton.click(function() {
            table.addRow();
        });
        this.removeRowButton.click(function() {
            table.removeLastRow();
        });

        this.table.addRow();
        for (var i = 0; i < 6; ++i) {
            this.table.addColumn();
        }

        this.disable();
    };

    util.extend(param.StripedFillsArea, param.BaseOptionalParamArea, {

        getParamString : function() {
            var matrix = this.table.data();
            var row;
            var row2;
            var ss = [];

            for (var i = 0; i < matrix.length; ++i) {
                row = matrix[i];
                row2 = [row[0], 'ls', row[1], row[2], row[3], row[4], row[5]];
                for (var j = 6; j < row.length; ++j) {
                    row2.push(row[j]);
                }
                ss.push(row2.join(','));
            }
            return ss.join('|');
        }

    });

})();
