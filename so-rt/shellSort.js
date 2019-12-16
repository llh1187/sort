function shellSort(arr){
	let i,j;
	let increment = arr.length;
	let length = arr.length;
	do{
		increment = Math.floor(increment/3)+1;
		for(i = increment; i<=length; i++){
			if(arr[i] < arr[i-increment]){
				arr[length] = arr[i];
				for(j = i-increment; j>=0 && arr[length]<arr[j]; j -= increment){
					arr[j+increment] = arr[j];
				}
				arr[j+increment] = arr[length];
			}
		}
	}
	while(increment>1);
	arr.pop();
	console.log(arr);
}
let array = [9,1,5,8,3,7,4,6,2];
shellSort(array);
