/* FILE table.js */

/* Seong-June Kim 2010 */

(function () {
    /**
     * rowHeaderGen: function(row)
     * - returns content for row header
     * columnHeaderGen: function(col)
     * - returns content for column header
     * cellGen: function(row, col)
     * - returns the initial content for the cell at (row, col)
     */
    Table = function(element, options) {

        this.table = element;
        this.options = options;

        // Prefix (unique in the document) that will be used to name 
        // everything in the table
        this.uniquePrefix = options.uniquePrefix;

        this.rowHeaderGen = options.rowHeaderGen;
        this.columnHeaderGen = options.columnHeaderGen;
        this.cellGen = options.cellGen;

        this.rowLabelPrefix = options.rowLabelPrefix;
        this.enableTargetClass = options.enableTargetClass;

        if (this.columnHeaderGen) {
            this.addColumnHeader();
        }
        this.numRows = 0; //number of rows excluding the header
        this.numCols = 0; //number of columns excluding the header
        this.minCols = options.minCols || 1; //minimum number of columns
    };

    Table.prototype = {

        addColumnHeader: function() {
            var rowElem = $('<tr></tr>').attr('id', this.getRowId(0));
            if (this.rowHeaderGen) {
                rowElem.append($('<th></th>'));
            }
            this.table.append(rowElem);
        },

        addRow: function() {
            ++this.numRows;
            var rowElem = $('<tr></tr>').attr('id', this.getRowId(this.numRows));
            if (this.rowHeaderGen) {
                rowElem.append('<td></td>').html(this.rowHeaderGen(this.numRows));
            }
            this.table.append(rowElem);
            for (var col = 1; col <= this.numCols; ++col) {
                this.addColumnToRow(this.numRows, col);
            }
        },

        removeLastRow: function() {
            if (this.numRows > 1) {
                $('#' + this.getRowId(this.numRows)).remove();
                --this.numRows;
            }
        },

        addColumn: function() {
            ++this.numCols;
            if (this.columnHeaderGen) {
                var headerElem = $('<th></th>').html(this.columnHeaderGen(this.numCols));
                $('#' + this.getRowId(0)).append(headerElem);
            }
            for (var row = 1; row <= this.numRows; ++row) {
                this.addColumnToRow(row);
            }
        },

        addColumnToRow: function(row, col) {
            col = col ? col : this.numCols;
            var td = $('<td></td>').attr('id', this.getCellId(row, col));
            td.append(this.getCellContent(row, col));
            //var td = '<td id="' + this.getCellId(row, col) + '">' + this.getCellContent(row, col) + '</td>';
            $('#' + this.getRowId(row)).append(td);
        },

        removeLastColumn: function() {
            if (this.numCols > this.minCols) {
                if (this.columnHeaderGen) {
                    ths = $('#' + this.getRowId(0)).children('th');
                    $(ths[ths.length-1]).remove();
                }
                for (var row = 1; row <= this.numRows; ++row) {
                    console.log('Removing ' + row + ', ' + this.numCols);
                    $('#' + this.getCellId(row, this.numCols)).remove();
                }
                --this.numCols;
            }
        },

        getRowId: function(num) {
            return this.uniquePrefix + '_row_' + num;
        },

        getCellId: function(row, col) {
            return this.uniquePrefix + '_cell_' + row + '_' + col;
        },

        getCellContentId: function(row, col) {
            return this.uniquePrefix + '_content_' + row + '_' + col;
        },

        getCellContent: function(row, col) {
            var content = null;
            if (this.cellGen) {
                var obj = this.cellGen(row, col);
                if (typeof obj === 'object') {
                    content = $(obj.content);
                }
                else {
                    content = this.getInput(row, col, obj);
                }
            }
            else {
                content = this.getInput(row, col, '');
            }
            content.attr('id', this.getCellContentId(row, col));
            content.addClass(this.enableTargetClass);
            return content;
        },

        getInput: function(row, col, val) {
            var inputElem = $('<input></input');
            inputElem.attr({ size: '8', value: val });
            return inputElem;
        },

        data: function() {
            var rows = [];
            var elem = null;
            for (var row = 1; row <= this.numRows; ++row) {
                var cols = [];
                rows.push(cols);
                for (var col = 1; col <= this.numCols; ++col) {
                    elem = $('#' + this.getCellContentId(row, col));
                    if (elem.is('select')) {
                        cols.push(elem.find('option:selected').val());
                    }
                    else if (elem.is('input')) {
                        cols.push(elem.val());
                    }
                    else {
                        cols.push('');
                    }
                }
            }
            return rows;
        },

        defaultValue: function(row, col) {
            if (this.cellGen) {
                var obj = this.cellGen(row, col);
                if (typeof obj === 'object') {
                    return obj.content;
                }
                else {
                    return obj;
                }
            }
            else {
                return '0';
            }
        }
    };

})();
