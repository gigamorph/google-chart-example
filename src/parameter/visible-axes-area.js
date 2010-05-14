/*
 * 11/27/2009 Seong-June Kim
 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.VisibleAxesArea = function (args) {
        param.VisibleAxesArea.uber.init.apply(this, [{
            area: $('#visible_axes_area'),
            enableButton: $('#visible_axes_enable_button'),
            enableTargetClass: 'visible_axes_enable_target'
        }]);

        var table = new Table($('#visible_axes_table'), {
            uniquePrefix: 'visible_axes_table',
            enableTargetClass: this.enableTargetClass,
            rowHeaderGen: function(row) {
                return 'Axes: ';
            },
            columnHeaderGen: function(col) {
                return 'Axis ' + (col - 1);
            },
            cellGen: function(row, col) {
                switch ((col - 1) % 4) {
                    case 0: return 'x'; 
                    case 1: return 'y';
                    case 2: return 'r';
                    case 3: return 't';
                    default:
                        alert('Error: VisibleAxesArea: cellGen: unexpected input');
                        return '';
                }
            }
        });

        this.table = table;

        this.addButton = $('#add_visible_axes_button');
        this.removeButton = $('#remove_visible_axes_button');
        this.enableButton = $('#visible_axes_enable_button');

        this.addButton.click(function() {
            table.addColumn();
        });
        this.removeButton.click(function() {
            table.removeLastColumn();
        });

        this.table.addRow();
        this.table.addColumn();
        this.table.addColumn();

        this.disable();
    };

    util.extend(param.VisibleAxesArea, param.BaseOptionalParamArea, {

        getParamString : function() {
            return 'chxt=' + this.table.data()[0].join(',');
        }

    });

})();
