var a = [60,71,49];
var len = a.length;

for(var i = 1; i < len; i++){
	var key = a[i-1];
	if(a[i]<key){
		var temp  =a [i];
		for(var t = i; t > 0&&temp<a[t-1];t--){//后移
			console.log(a[t]);
			console.log(a[t-1]);
			a[t] = a[t-1];
			

		}
		a[t-1+1] = temp;//这里注意要+1.
	}
}

console.log(a);