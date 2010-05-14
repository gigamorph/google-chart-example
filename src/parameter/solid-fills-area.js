/*
 * 11/27/2009 Seong-June Kim
 */

(function() {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.SolidFillsArea = function (args) {
        var self = this;

        param.SolidFillsArea.uber.init.apply(this, [{
            area: $('#solid_fills_area'),
            enableButton: $('#solid_fills_enable_button'),
            enableTargetClass: 'solid_fills_enable_target'
        }]);

        var table = new Table($('#solid_fills_table'), {
            uniquePrefix: 'solid_fills_table',
            enableTargetClass: this.enableTargetClass,
            columnHeaderGen: function(col) {
                return ['Fill Type', 'Color'][(col-1) % 2];
            },
            cellGen: function(row, col) {
                if (col === 1) {
                    return 'bg';
                }
                else if (col % 2 === 0) {
                    var colors = net.yy.google.chart.colors;
                    return colors[Math.floor(Math.random() * colors.length)];
                }
                else {
                    return 'b' + (col-1) / 2;
                }
            },
            minCols: 2
        });

        this.table = table;

        this.addColumnButton = $('#add_solid_fills_column_button');
        this.removeColumnButton = $('#remove_solid_fills_column_button');
        this.enableButton = $('#solid_fills_enable_button');

        this.addColumnButton.click(function() {
            table.addColumn();
            table.addColumn();
        });
        this.removeColumnButton.click(function() {
            table.removeLastColumn();
            table.removeLastColumn();
        });

        this.table.addRow();
        for (var i = 0; i < 2; ++i) {
            this.table.addColumn();
        }

        this.disable();
    };

    util.extend(param.SolidFillsArea, param.BaseOptionalParamArea, {

        getParamString : function() {
            var row = this.table.data()[0];
            var list = [];

            for (var i = 0; i < row.length; i += 2) {
                list.push([row[i], 's', row[i+1]].join(','));
            }
            return list.join('|');
        }

    });

})();
