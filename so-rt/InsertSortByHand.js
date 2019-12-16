function iSort(arr){
	var i,j;
	var length = arr.length;
	for(i = 0; i < length; i++){
		if(arr[i] > arr[i+1]){
			arr[length] = arr[i+1];
			for(j = i; arr[j] > arr[length];j--){
				arr[j+1] = arr[j];
			}
			arr[j+1] = arr[length];
		}
	}
	arr.pop();
	console.log(arr);
}

var arr = [9,1,2,8,5,4];
iSort(arr);
