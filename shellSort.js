// shellSort
var a = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4];
//增量 判断 交换
var increment = Math.floor(a.length / 2); //4
for (; increment > 0; increment = Math.floor(increment / 2)) {
    for (var j = 0; j + increment < a.length; j++) {
        for (var t = j; t>=0; t -= increment) {
            if (a[t] > a[t + increment]) {	
                swap(t, t + increment);
                
            }
        }

    }

}

function swap(i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}
console.log(a);

