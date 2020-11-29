export function genereteCsv(objArray, filename) {
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
    let data = str
    let type = "text/plain"
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"), url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
    return str;
}