function sort(arr){
	let i,j,min,temp;
	let length = arr.length;
	for(i = 0; i < length; i++){
		min = i;
		for(j = i+1; j < length; j++){
			if(arr[min] > arr[j]){
				min = j;
			}
		}
		if(i != min){
			temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}
	console.log(arr);
}
let array = [8,7,6,5,4,3,2,1];
sort(array);
