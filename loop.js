let arr = [2, 3, 2, 1, 5, 3, 6];
let obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;

}
console.log(obj[5]);
