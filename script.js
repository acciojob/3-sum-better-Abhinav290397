function threeSum(arr, target) {
// write your code here
	let ans = Number.MAX_VALUE;
	let n = arr.length;
	for(let i=0;i<n;i++){
		for(let j=i+1;j<n-1;j++){
			let k=j+1;k<n-2;k++){
				let sum = arr[i]+arr[j]+arr[k]; 
				let Dif = (sum - target);
				if(ans > Dif){
					ans = sum;
				}
			}
		}
	}
  return ans;
}

module.exports = threeSum;
