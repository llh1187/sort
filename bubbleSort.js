function sort(arr){
	let i,j,temp;
	length = arr.length;
	let flag = true;
	for(i = 0; i < length&&flag; i++){
		flag = false;
		for(j = length-1; j > i; j--){
			if(arr[j] < arr[j-1]){
				temp = arr[j];
				arr[j] = arr[j-1];
				arr[j-1] = temp;
				flag = true;
			}
		}
	}
	console.log(arr);
} 
let array = [8,7,6,5,4,3,2,1];
sort(array);
