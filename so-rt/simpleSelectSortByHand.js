function sSort(arr){
	let i,j,min,temp;
	let length = arr.length;
	for(i = 0; i < length; i++){
		min = i;
		for(j = i+1; j < length; j++){
			if(arr[j] < arr[min]){
				min = j;
			}
		}
		if(i != min){
			temp = arr[min];
			arr[min] = arr[i];
			arr[i] = temp;
		}
	}
	console.log(arr);
}


let array = [1,2,4,9,6,7,3,5,8];
sSort(array);
