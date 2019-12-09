function sort(arr){
	let i,j,temp;
	let increment = arr.length;
	let length = arr.length;
	do{
	
		increment = Math.floor(increment/3)+1;
		for(i = increment; i < length; i++){
			if(arr[i] < arr[i-increment]){
				temp = arr[i];
				for(j = i-increment; j >=0&&temp < arr[j]; j -= increment){
                            		arr[j+increment] = arr[j]; 
				}
				arr[j+increment] = temp; 
			}
		}
	}
	while(increment > 1);
	console.log(arr);
}
let array = [8,7,6,5,4,3,2,1];
sort(array);
console.log(array);
