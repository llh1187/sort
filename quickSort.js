function sort(arr,low,high){
	let pivot 
	if(low < high){
		pivot = partition(arr,low,high);
		sort(arr,low,pivot-1);
		sort(arr,pivot+1,high);
	}
	return arr;
}

function partition(arr,low,high){
	let temp;
	let pivotkey = arr[low];
	while(low < high){
		while(low<high && arr[high] > pivotkey){
			high--;
		}
		
		temp = arr[low];
		arr[low] = arr[high];
		arr[high] = temp;
		
		while(low<high && arr[low] < pivotkey){
			low++;
		}
		
		temp = arr[low];
		arr[low] = arr[high];
		arr[high] = temp;
	}
	return low;
}

let array = [9,8,7,6,5,4,3,2,1];
let res =  sort(array,0,array.length-1);
console.log(res);
