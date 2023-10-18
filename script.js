function threeSum(arr, target) {
// write your code here
	let diff = Number.MAX_VALUE;
	ans = -1
	let n = arr.length;
	for(let i=0;i<n-2;i++){
		for(let j=i+1;j<n-1;j++){
			let k=j+1;k<n;k++){
				let sum = arr[i]+arr[j]+arr[k]; 
				let Dif = Math.abs(sum - target);
				if(diff > Dif){
					diff = Dif;
					ans = sum;
				}
			}
		}
	}
  return ans;
}

module.exports = threeSum;
