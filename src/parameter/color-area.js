/*
 * 11/27/2009 Seong-June Kim
 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.ColorArea = function (args) {
        var self = this;

        param.ColorArea.uber.init.apply(this, [{
            area: $('#color_area'),
            enableButton: $('#color_enable_button'),
            enableTargetClass: 'color_enable_target'
        }]);

        var table = new Table($('#color_area_table'), {
            uniquePrefix: 'color_table',
            enableTargetClass: this.enableTargetClass,
            rowHeaderGen: function (row) {
                return 'Series ' + row;
            },
            columnHeaderGen: function (col) {
                return 'Element ' + col;
            },
            cellGen: function (row, col) {
                var colors = net.yy.google.chart.colors;
                return colors[Math.floor(Math.random() * colors.length)];
            }
        });

        this.table = table;

        this.addColorButton = $('#add_color_button');
        this.removeColorButton = $('#remove_color_button');
        this.addColorSetButton = $('#add_color_set_button');
        this.removeColorSetButton = $('#remove_color_set_button');
        this.enableButton = $('#color_enable_button');
        this.addColorButton.click(function () {
            table.addColumn();
        });
        this.removeColorButton.click(function () {
            table.removeLastColumn();
        });
        this.addColorSetButton.click(function () {
            table.addRow();
        });
        this.removeColorSetButton.click(function () {
            table.removeLastRow();
        });
        this.table.addRow();
        this.table.addColumn();

        this.disable();
    };

    util.extend(param.ColorArea, param.BaseOptionalParamArea, {

        getParamString: function () {
            var matrix = this.table.data();
            var colorSets = [];
            for (var row = 0; row < matrix.length; ++row) {
                colorSets.push(matrix[row].join('|'));
            }
            return 'chco=' + colorSets.join(',');
        }

    });

})();
