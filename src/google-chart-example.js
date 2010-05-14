/*
 * 11/27/2009 Seong-June Kim
 */

(function () {

    var self = this;
    var param = net.yy.google.chart.param;
    var type = net.yy.google.chart.type;

    $(document).ready(function () {
        self.app = new net.yy.google.chart.App();
    });

    net.yy.google.chart.App = function () {
        var dataScaleArea = new param.DataScaleArea();
        var solidFillsArea = new param.SolidFillsArea();
        var gradientFillsArea = new param.GradientFillsArea();
        var stripedFillsArea = new param.StripedFillsArea();

        this.params = {
            axis_label: new param.AxisLabelArea(),
            axis_label_styles: new param.AxisLabelStylesArea(),
            axis_range: new param.AxisRangeArea(),
            axis_tick_mark_styles: new param.AxisTickMarkStylesArea(),
            bar_width_spacing: new param.BarWidthSpacingArea(),
            color: new param.ColorArea(),
            data: new param.DataArea(dataScaleArea),
            data_scale: dataScaleArea,
            dynamic_icon_markers: new param.DynamicIconMarkersArea(),
            background_fills: new param.BackgroundFillsArea(solidFillsArea,
                    gradientFillsArea, stripedFillsArea),
            grid_lines: new param.GridLinesArea(),
            legend: new param.LegendArea(),
            legend_position: new param.LegendPositionArea(),
            line_style: new param.LineStyleArea(),
            margin: new param.MarginArea(),
            pie_orientation: new param.PieOrientationArea(),
            size: new param.SizeArea(),
            title: new param.TitleArea(),
            title_style: new param.TitleStyleArea(),
            type: new param.TypeArea(),
            visible_axes: new param.VisibleAxesArea()
        };

        this.charts = {
            lc: new type.LineChart(this),
            ls: new type.SparkLines(this),
            lxy: new type.XyLines(this),
            bhs: new type.HStackedBars(this),
            bvs: new type.VStackedBars(this),
            bhg: new type.HGroupedBars(this),
            bvg: new type.VGroupedBars(this),
            s: new type.ScatterPlot(this),
            p: new type.PieChart(this),
            p3: new type.Pie3D(this),
            pc: new type.PieConcentric(this)
        };
        
        this.setupListeners();
        this.setCurrentChart(this.charts.lc);
        this.updateChart();
    };

    net.yy.google.chart.App.prototype = {

        show: function (pname) {
            this.params[pname].show();
        },

        hide: function (pname) {
            this.params[pname].hide();
        },

        setCurrentChart: function (c) {
            this.currentChart = c;
            this.params.color.show();
            this.params.data.show();
            this.params.background_fills.show();
            this.params.legend.show();
            this.params.legend_position.show();
            this.params.margin.show();
            this.params.size.show();
            this.params.title.show();
            this.params.title_style.show();
            this.params.type.show();

            if (c instanceof type.BaseLineChart) {
                this.params.line_style.show();
            }
            else {
                this.params.line_style.hide();
            }
            if (c instanceof type.BaseBarChart) {
                this.params.bar_width_spacing.show();
            }
            else {
                this.params.bar_width_spacing.hide();
            }
            if (c instanceof type.BasePieChart) {
                this.params.pie_orientation.show();
            }
            else {
                this.params.pie_orientation.hide();
            }
            if (c instanceof type.BaseLineChart ||
                c instanceof type.BaseBarChart ||
                c instanceof type.ScatterPlot)
            {
                this.params.axis_label.show();
                this.params.axis_label_styles.show();
                this.params.axis_range.show();
                this.params.axis_tick_mark_styles.show();
                this.params.dynamic_icon_markers.show();
                this.params.grid_lines.show();
                this.params.visible_axes.show();
            }
            else {
                this.params.axis_label.hide();
                this.params.axis_label_styles.hide();
                this.params.axis_range.hide();
                this.params.axis_tick_mark_styles.hide();
                this.params.dynamic_icon_markers.hide();
                this.params.grid_lines.hide();
                this.params.visible_axes.hide();
            }
        },

        updateChart: function (validate) {
            var url = 'http://chart.apis.google.com/chart?';
            for (var name in this.params) {
                debug('name=' + name + ' obj=' + this.params[name] + ' visible=' + this.params[name].isVisible() + ' enabled=' + this.params[name].isEnabled());
                if (this.params[name].isVisible() && this.params[name].isEnabled()) {
                    var pstr =  this.params[name].getParamString();
                    if (pstr) {
                        url += '&' + pstr;
                    }
                }
            }
            $('#url_area').text(url);
            if (!net.yy.google.chart.offline_test_mode) {
                if (validate) {
                    $('#chart_img').hide();
                    $('#validate_area').show();
                    $('#validate_area').attr('src', url + '&chof=validate');
                }
                else {
                    $('#chart_img').show();
                    $('#validate_area').hide();
                    $('#chart_img').attr('src', url);
                }
            }
        },

        setupListeners: function () {
            var self = this;

            $('#update_button').click(function () {
                    self.updateChart();
            });
            $('#validate_button').click(function () {
                self.updateChart(true);
            });
            $('#type_selector').change(function () {
                    type = $('#type_selector option:selected').attr('value');
                    self.setCurrentChart(self.charts[type]);
            });
            $('#add_data').click(function () {
                    ex.dataRow.addField(1);
            });
            $('#remove_data').click(function () {
                    ex.dataRow.removeLastField();
            });
        }
    };

})();
