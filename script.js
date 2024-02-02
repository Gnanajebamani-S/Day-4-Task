// 1a. Print odd numbers in an array
var odd = [];
var a = function(arr){
for(var i=0;i<arr.length;i++){
 if(arr[i]%2 != 0)
    odd.push(arr[i]);
    }
return odd;
}
var result = a([3,4,8,6,12,15,121,14,139]);
console.log(result);



// 1b. Convert all the strings to title caps in a string array
var upperCase = function(str){ 
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].toLowerCase();
      str[i] = str[i].charAt(str[0]).toUpperCase() + str[i].slice(1)
    }
   
    return str;
}
console.log(upperCase(["hEllo","gUVi","teaM"]));




// 1c. Sum of all numbers in an array
var sum = 0;
var a = function(arr){
for(var i=0;i<arr.length;i++){
 sum = sum+arr[i];
}
return sum;
}
var result = a([3,4,8,6,12,15,121,14,139]);
console.log(result);



// 1d. Return all the prime numbers in an array
var prime = [];

var isprime = function(item) {
      for (var j = 2; j <= Math.sqrt(item); j++) {
       if ((item % j) == 0) {
        return false;
       } 
     }
     return true;
}
var a = ([5, 9, 63, 29, 35, 6, 55, 23])
for (var i = 0; i < a.length; i++) {
  if (isprime(a[i])) {
      prime.push(a[i])
  }
}

console.log(prime);



// 1e. Return all the palindromes in an array
var isPalindrome = function(s){
    var a = s;
    s = s.split('').reverse().join('');
    return s == a;
}

var PalindromicStrings = function(arr,N)
{
    var ans = [];
    for (var i = 0; i < N; i++) {
        if (isPalindrome(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
 
var arr = [ "abc", "car", "ada", "racecar", "cool" ];
var N = arr.length;
console.log(PalindromicStrings(arr,N))



// 1f. Return median of two sorted arrays of the same size.

var median = function(a, b){
    var c = [...a, ...b].sort((a, b) => a - b);
    var half = c.length / 2 | 0;
    
     if (c.length % 2) 
      return c[half];

    return (c[half] + c[half - 1]) / 2;
}
var result = median([1, 12, 15, 26, 38],[2, 13, 17, 30, 45]);
console.log(result);



// 1g. Remove duplicates from an array

var arr = [1,2,3,2,4,1,6];

function removeDuplicates(arr) {
  var a =(item,index) => arr.indexOf(item) === index;
    return arr.filter(a);
}
console.log(removeDuplicates(arr));



// 1h. Rotate an array by k times
var rotate = function(nums, k) {
    var n = nums.length;
    
    var rotated = [];
    for (var i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }
    
    for (var i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
    return nums;
}
var result = rotate([1,2,3,4,5,6,7],3);
console.log(result)
