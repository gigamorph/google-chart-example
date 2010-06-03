//= require "../defs"
//= require "../util"
//= require "../table"
//= require "base-param-area"

/* FILE data-area.js */

/* Seong-June Kim 2010 */

(function () {

    var param = net.yy.google.chart.param;
    var util = net.yy.google.chart.util;

    param.DataArea = function (dataScaleArea) {
        var self = this;

        param.DataArea.uber.init.apply(this, [{ area: $('#data_area') }]);
        this.dataScaleArea = dataScaleArea;

        var table = new Table($('#data_table'), {
            uniquePrefix: 'data_table',
            enableTargetClass: 'data_enable_target',
            rowHeaderGen: function (row) {
                return 'Series ' + row;
            },
            columnHeaderGen: function (col) {
                return 'Element ' + col;
            },
            cellGen: function (row, col) {
                return 5 + Math.floor(Math.random() * 95);
            }
        });

        this.table = table;
        this.addDataButton = $('#add_data_button');
        this.removeDataButton = $('#remove_data_button');
        this.addDataSetButton = $('#add_data_set_button');
        this.removeDataSetButton = $('#remove_data_set_button');
        this.addDataButton.click(function () {
            table.addColumn();
        });
        this.removeDataButton.click(function () {
            table.removeLastColumn();
        });
        this.addDataSetButton.click(function () {
            table.addRow();
        });
        this.removeDataSetButton.click(function () {
            table.removeLastRow();
        });
        table.addRow();
        table.addColumn();
        table.addColumn();
        table.addColumn();

        $('#data_encoding_selector').change(function () {
            self.updateDataScaleArea();
        });

        this.enabled = true;
        this.updateDataScaleArea();
    };

    util.extend(param.DataArea, param.BaseParamArea, {

        show: function () {
            param.DataArea.uber.show.apply(this);
            this.updateDataScaleArea();
        },

        hide: function () {
            param.DataArea.uber.hide.apply(this);
            this.dataScaleArea.hide();
        },

        updateDataScaleArea: function () {
            if (this.getEncoding() == 'text_scale') {
                this.dataScaleArea.show();
            }
            else {
                this.dataScaleArea.hide();
            }
        },

        data: function () {
            console.log('Data=' + this.table.data().toString());
            return this.table.data();
        },

        getParamString: function () {
            var i;
            var data = this.table.data();
            var rows = [];
            if (this.getEncoding() == 'simple_encoding') {
                for (i = 0; i < data.length; ++i) {
                    rows.push(data[i].join(''));
                }
                return 'chd=s:' + rows.join(',');
            }
            else if (this.getEncoding() == 'extended_encoding') {
                for (i = 0; i < data.length; ++i) {
                    rows.push(data[i].join(''));
                }
                return 'chd=e:' + rows.join(',');
            }
            else {
                for (i = 0; i < data.length; ++i) {
                    rows.push(data[i].join(','));
                }
                return 'chd=t:' + rows.join('|');
            }
        },

        getEncoding: function () {
            return $('#data_encoding_selector option:selected').attr('value');
        }
    });

})();
