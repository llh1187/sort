function merge(left,right){
	let result = [];
	while(left.length>0 && right.length>0){
		if(left[0] < right[0]){
			result.push(left.shift());
		}else{
			result.push(right.shift());
		}
	}
	return result.concat(left).concat(right);
}

function mergeArray(items){
	if(items.length === 1){
		return items;
	}
	let middle = Math.floor(items.length/2);
	let left = items.slice(0,middle);
	let right = items.slice(middle);
	return merge(mergeArray(left),mergeArray(right));
}

let array = [9,8,7,6,5,4,3,2,1];
let res = mergeArray(array);
console.log(res);
