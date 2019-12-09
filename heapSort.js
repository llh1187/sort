function sort(arr){
	let i;
	let length = arr.length;
	for(i = Math.floor((length-1)/2); i >= 0; i--){
		adjust(arr,i,length-1);
	}
	for(i = length-1; i >= 1; i--){
		temp = arr[0];
		arr[0] = arr[i];
		arr[i] = temp;
		adjust(arr,0,i-1);
	}
	console.log(arr);
}

//调整i的位置上的值使得相对于子节点来说是最大的。
function adjust(arr,i,length){
	let temp,j;
	temp = arr[i];
	for(j = 2*i+1; j <= length; j = j*2+1){
		//j要<length  因为要进行j++
		if(j < length&& arr[j] < arr[j+1]){
			j++;
		}	
		if(temp > arr[j]){
			break;
		}
		arr[i] = arr[j];
		i = j;
	}
	arr[i] = temp;
}


let array = [9,8,7,6,5,4,3,2,1];
sort(array);
