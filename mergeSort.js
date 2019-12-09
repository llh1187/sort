function sort(arr = [], length = arr.length, temp = new Array(length),len = 1){
	let deep,even;
	for(deep = 0; Math.pow(2,deep)<length; deep++,len *= 2){
		even = deep%2 === 0; 
		for(let left = 0; left < length; left += len*2 ){
			let right = (left + len) < length ? left + len : left;
			let end = (left + len*2) < length? left + len*2 : length;
			merge(even?arr:temp,even?temp:arr,left,right,end);
		}
	}
	if(even){
		return temp;
	}
	return arr;
}

function merge(arr,temp,left,right,end){
	let leftEnd = right-1;
	while(left<=leftEnd && right<end){
		if(arr[left] < arr[right]){
			temp[left+right-leftEnd-1] = arr[left++];
		}else{
			temp[left+right-leftEnd-1] = arr[right++];
		}
	}
	while(left<=leftEnd && right>=end){
		temp[left+right-leftEnd-1] = arr[left++];
	}
	while(left>leftEnd && right<end){
		temp[left+right-leftEnd-1] = arr[right++];
	}
}

let array = [9,8,7,6,5,4,3,2,1];
let res = sort(array);
console.log(res);
