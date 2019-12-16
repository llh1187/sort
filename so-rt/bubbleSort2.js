function bSort(arr){
	var temp;
	var flag = true;
	for(var i = 0; i < arr.length && flag; i++){
		flag = false;
		for(var j = arr.length-2; j >=i; j--){
			if(arr[j]>arr[j+1]){
				temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
				flag = true;
			}
		}
	}
	console.log(arr);
}
var arr = [9,1,2,5,8,10,0];
bSort(arr);
