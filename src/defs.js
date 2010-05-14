if (typeof net == 'undefined' || !net) {
    var net = {};
}
if (!net.yy) {
    net.yy = {};
}
if (!net.yy.google) {
    net.yy.google = {};
}
if (!net.yy.google.chart) {
    net.yy.google.chart = {};
}
if (!net.yy.google.chart.param) {
    net.yy.google.chart.param = {};
}
if (!net.yy.google.chart.type) {
    net.yy.google.chart.type = {};
}
if (!net.yy.google.chart.util) {
    net.yy.google.chart.util = {};
}

net.yy.google.chart.offline_test_mode = false;

if (!console) {
    var console = { log: function() {} };
}

var debug = console.log;

net.yy.google.chart.colors =
    ['ff3333', 'ff8e8e', 'ff68dd', 'cc6600', 'ff9933', 'ffac6e',
     'ffff00', 'fffe84', 'd1d17a', '336600', '1fcb4a', '66ff00',
     '0066ff', '2f74d0', '2faace', '000066', '333399', '5b5bff',
     '330066', 'f206ff', '800080'
    ];
