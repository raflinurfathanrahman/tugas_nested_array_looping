function panggilNestedArray(value) {
    // tulis jawabanmu disini
    var tampung = [0, 1, 2, 3];
    var result = [];
    for (var i = 0; i < value.length; i++) {
        var data = []
        for (var x = 0; x < value[i].length; x++) {
            for (var s = 0; s < tampung.length; s++) {
                if (value[i].indexOf(value[i][x]) === tampung[s]) {
                    data.push(value[i][x]);
                }
            } 
        } 
        result.push(data)
    }console.log(result);
}

var nestedArray = [
    [1, 2, 3, 4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]
panggilNestedArray(nestedArray)