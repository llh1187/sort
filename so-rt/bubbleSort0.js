function bSort(arr){
	//数组 冒泡排序 小的在前 大的往后
	//两两比较 记得是从后往前排序的
	var temp;
	for(var i = arr.length-1; i >= 0; i--){
		for(var j = i-1; j >= 0; j--){
			if(arr[j] > arr[i]){
				temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}

		}
	}
	console.log(arr);
}

var arr = [9,1,5,8,3,7,4,6,2];
bSort(arr);
