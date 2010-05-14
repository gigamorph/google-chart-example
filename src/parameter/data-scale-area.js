(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.DataScaleArea = function () {
        param.DataScaleArea.uber.init.apply(this,
            [{ area: $('#data_scale_area') }]);
        this.minRow = new Table($('#data_scale_min_table'), {
            uniquePrefix: 'data_scale_min_table',
            enableTargetClass: 'data_scale_enable_target',
            cellGen: function (row, col) {
                return -50;
            }
        });
        this.maxRow = new Table($('#data_scale_max_table'), {
            uniquePrefix: 'data_scale_max_table',
            rowLabelPrefix: null,
            enableTargetClass: 'data_scale_enable_target',
            cellGen: function (row, col) {
                return 150;
            }
        });

        var minRow = this.minRow;
        var maxRow = this.maxRow;

        this.addColumnButton = $('#add_data_scale_column_button');
        this.removeColumnButton = $('#remove_data_scale_column_button');
        this.addColumnButton.click(function () {
            minRow.addColumn();
            maxRow.addColumn();
        });
        this.removeColumnButton.click(function () {
            minRow.removeLastColumn();
            maxRow.removeLastColumn();
        });

        this.minRow.addRow();
        this.minRow.addColumn();
        this.maxRow.addRow();
        this.maxRow.addColumn();

        this.enabled = true;
    };

    util.extend(param.DataScaleArea, param.BaseParamArea, {

        addField : function (min, max) {
            this.minRow.addField(min);
            this.maxRow.addField(max);
        },

        getParamString: function () {
            console.log('ENTER DataScaleArea#getParamString');
            var minValues = this.minRow.data()[0];
            var maxValues = this.maxRow.data()[0];
            var pairs = [];
            for (var i = 0; i < minValues.length; ++i) {
                pairs.push([minValues[i], maxValues[i]]);
            }
            return 'chds=' + pairs.join(',');
        }

    });

})();
