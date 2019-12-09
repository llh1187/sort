function sort(arr){
	let i,j,temp;
	let length = arr.length;
	for(i = 0; i < length; i++){
		if(arr[i+1] < arr[i]){
			temp = arr[i+1];
			for(j = i; j >=0 && arr[j] > temp; j--){
				arr[j+1] = arr[j];	
			}
			arr[j+1] = temp;
		}
	}
	console.log(arr);
}
let array = [8,7,6,5,4,3,2,1];
sort(array);
