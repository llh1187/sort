function sort(arr){
	let i,j;
	let length = arr.length;
	for(i = 1; i < length; i++){
		if(arr[i] < arr[i-1]){
			arr[length] = arr[i];
			for(j = i-1; j >=0 && arr[j] > arr[length]; j--){
				arr[j+1] = arr[j];	
			}
			arr[j+1] = arr[length];
		}
	}
	arr.pop();
	console.log(arr);
}

let array = [1,9,8,7,6,5,4,3,2];
sort(array);
