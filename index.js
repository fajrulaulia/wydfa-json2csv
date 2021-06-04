const jsoncsv = {
    result: "",
    generate: function (objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        let Column = []
        if (objArray.length > 0) {
            Column = Object.keys(objArray[0])

        }
        objArray.unshift(Column)
        var str = '';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        this.result = str
        return this.result
    },

    download: function (filename) {
        var file = new Blob([this.result], { type: "text/csv" });
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var a = document.createElement("a"), url = URL.createObjectURL(file);
            a.href = url;
            a.download = (filename !== undefined || filename !== null || filename !== "") ? "download.csv" : filename + ".csv";
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
        return true;
    }
}

export default jsoncsv