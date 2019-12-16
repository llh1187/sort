function bSort(arr){
	var temp;
	for(var i = 1; i < arr.length; i++){
		for(var j = arr.length-1; j>=i; j--){
			if(arr[j-1] > arr[j]){
				temp = arr[j];
				arr[j] = arr[j-1];
				arr[j-1] = temp;
			}
		}
	}
	console.log(arr);
}

var arr = [9,1,5,8,3,7,4,6,2];

bSort(arr);
