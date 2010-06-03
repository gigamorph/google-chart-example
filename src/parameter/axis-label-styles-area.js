//= require "../defs"
//= require "../util"
//= require "../table"
//= require "base-optional-param-area"

/* FILE axis-label-styles-area.js */

/* Seong-June Kim 2010 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.AxisLabelStylesArea = function (args) {
        param.AxisLabelStylesArea.uber.init.apply(this, [{
            area: $('#axis_label_styles_area'),
            enableButton: $('#axis_label_styles_enable_button'),
            enableTargetClass: 'axis_label_styles_enable_target'
        }]);
        var self = this;

        var table = new Table($('#axis_label_styles_table'), {
            uniquePrefix: 'axis_label_styles_table',
            enableTargetClass: this.enableTargetClass,
            columnHeaderGen: function (col) {
                return ['Axis Index', 'Format String (optional)', 'Label Color',
                        'Font Size (optional)', 'Alignment (optional)',
                        'Axis or Tick (optional)', 'Tick Color (optional)'][col-1];
            },
            cellGen: function (row, col) {
                if (col === 1) { return row - 1; }
                if (col === 2) { return ''; }
                if (col === 3 || col === 7) {
                    var colors = net.yy.google.chart.colors;
                    return colors[Math.floor(Math.random() * colors.length)];
                }
                if (col === 4) {
                    return 10;
                }
                if (col === 5) {
                    return self.getAlignmentCellContent();
                }
                if (col === 6) {
                    return self.getAxisOrTickCellContent();
                }
            }
        });

        this.table = table;

        this.addButton = $('#add_axis_label_styles_button');
        this.removeButton = $('#remove_axis_label_styles_button');
        this.enableButton = $('#axis_label_styles_enable_button');

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
        this.table.addColumn();
        this.table.addColumn();
        this.table.addColumn();

        this.disable();
    };

    util.extend(param.AxisLabelStylesArea, param.BaseOptionalParamArea, {

        getParamString : function () {
            var matrix = this.table.data();
            var rows = [];
            var vals;

            for (var row = 0; row < matrix.length; ++row) {
                vals = matrix[row][1] === '' ? [matrix[row][0]] : [matrix[row][0] + matrix[row][1]];
                for (var i = 2; i < matrix[row].length; ++i) {
                    if (matrix[row][i] !== '') {
                        vals.push(matrix[row][i]);
                    }
                }
                rows.push(vals.join(','));
            }
            return 'chxs=' + rows.join('|');
        },

        getAlignmentCellContent: function () {
            var html = '<select>';
            html += '<option value="" selected="selected">Use default</option>';
            html += '<option value="-1">Left-aligned (-1)</option>';
            html += '<option value="0">Centered (0)</option>';
            html += '<option value="1">Right-aligned (1)</option>';
            html += '</select>';
            return { type: 'html', content: html };
        },

        getAxisOrTickCellContent: function () {
            var html = '<select>';
            html += '<option value="" selected="selected">Use default</option>';
            html += '<option value="l">Draw axis line only (l)</option>';
            html += '<option value="t">Draw tick marks only (t)</option>';
            html += '<option value="lt">Draw both (lt)</option>';
            html += '<option value="_">Draw neither (_)</option>';
            html += '</select>';
            return { type: 'html', content: html };
        }

    });

})();
