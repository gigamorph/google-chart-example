/*
 * 11/27/2009 Seong-June Kim
 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.DynamicIconMarkersArea = function (args) {
        var self = this;

        param.DynamicIconMarkersArea.uber.init.apply(this, [{
            area: $('#dynamic_icon_markers_area'),
            enableButton: $('#dynamic_icon_markers_enable_button'),
            enableTargetClass: 'dynamic_icon_markers_enable_target'
        }]);

        var table = new Table($('#dynamic_icon_markers_table'), {
            uniquePrefix: 'dynamic_icon_markers_table',
            enableTargetClass: this.enableTargetClass,
            rowHeaderGen: function (row) {
                return 'Marker ' + row;
            },
            columnHeaderGen: function (col) {
                return self.columnHeaders[col-1];
            },
            cellGen: function (row, col) {
                return [self.getIconTypeCellContent(),
                        self.getIconStringCellContent(),
                        self.getFrameStyleCellContent(),
                        ',Hello+there,row,ffffff,000000', '', '', '', '', '', '', ''][col-1];
            }
        });

        this.table = table;

        this.addRowButton = $('#add_dynamic_icon_markers_row_button');
        this.removeRowButton = $('#remove_dynamic_icon_markers_row_button');
        this.enableButton = $('#dynamic_icon_markers_enable_button');

        this.addRowButton.click(function () {
            table.addRow();
        });
        this.removeRowButton.click(function () {
            table.removeLastRow();
        });
        this.table.addRow();
        for (var i = 0; i < 11; ++i) {
            this.table.addColumn();
        }

        this.disable();
    };

    util.extend(param.DynamicIconMarkersArea, param.BaseOptionalParamArea, {

        columnHeaders: [
            'Icon (s)', 'Icon (d)', 'Frame (d)', 'Fill color (d)', 'Text (d)',
            'Text Color (d)', 'Series (ds)', 'Points (dp)',
            'Z Order (py)', 'Abs Position (po)', 'Offset (of)'
        ],

        getParamString: function () {
            var matrix = this.table.data();
            var rows = [];
            for (var i = 0; i < matrix.length; ++i) {
                var row = ['y;s=' + matrix[i][0], 'd=' + matrix[i][1]];
                if (matrix[i][2]) {
                    row.push('ds=' + matrix[i][2]);
                }
                if (matrix[i][3]) {
                    row.push('dp=' + matrix[i][3]);
                }
                if (matrix[i][4]) {
                    row.push('py=' + matrix[i][4]);
                }

                if (matrix[i][5]) {
                    row.push('po=' + matrix[i][5]);
                }

                if (matrix[i][6]) {
                    row.push('of=' + matrix[i][6]);
                }
                rows.push(row.join(';'));
            }
            return 'chem=' + rows.join('|');
        },

        getIconTypeCellContent: function () {
            var html = '<select>';
            html += '<option value="bubble_text_small" selected="selected">bubble_text_small</option>';
            html += '<option value="bubble_text_small_withshadown">bubble_text_small_withshadow</option>';
            html += '<option value="bubble_icon_text_small">bubble_icon_text_small</option>';
            html += '<option value="bubble_icon_text_small_withshadow">bubble_icon_text_small_withshadow</option>';
            html += '<option value="bubble_icon_text_big">bubble_icon_text_big</option>';
            html += '<option value="bubble_icon_text_big_withshadow">bubble_icon_text_big_withshadow</option>';
            html += '<option value="bubble_texts_big" selected="selected">bubble_texts_big</option>';
            html += '<option value="bubble_texts_big_withshadown">bubble_texts_big_withshadow</option>';
            html += '<option value="bubble_icon_texts_big" selected="selected">bubble_texts_big</option>';
            html += '<option value="bubble_icon_texts_big_withshadown">bubble_texts_big_withshadow</option>';
            html += '</select>';
            return { type: 'html', content: html };
        },

        getIconStringCellContent: function () {
            var html = '<select>';
            html += '<option value="bubble_text_small" selected="selected">bubble_text_small</option>';
            html += '<option value="bubble_text_small_withshadown">bubble_text_small_withshadow</option>';
            html += '</select>';
            return { type: 'html', content: html };
        },
        
        getFrameStyleCellContent: function () {
            var html = '<select>';
            html += '<option value="bb" selected="selected">Balloon frame, tail at bottom left (bb)</option>';
            html += '<option value="bbtl">Balloon frame, tail at top left (bbtl)</option>';
            html += '<option value="bbtr">Balloon frame, tail at top right (bbtr)</option>';
            html += '<option value="bbbr">Balloon frame, tail at bottom right (bbbr)</option>';
            html += '<option value="bbT">Balloon frame, no tail (bbT)</option>';
            html += '<option value="edge_bl">Edge frame, tail at bottom edge, left end (edge_bl)</option>';
            html += '<option value="edge_bc">Edge frame, tail at bottom edge, centered (edge_bc)</option>';
            html += '</select>';
            return { type: 'html', content: html };
        }

    });

})();
