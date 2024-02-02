// 2a. Print odd numbers in an array
var odd = [];
var a = (arr)=>{
for(var i=0;i<arr.length;i++){
if(arr[i]%2 != 0)
    odd.push(arr[i]);
    }
return odd;
}

console.log(a([3,4,8,6,12,15,121,14,139]))


// 2b. Convert all the strings to title caps in a string array
var upperCase = (str)=>{ 
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].toLowerCase();
      str[i] = str[i].charAt(str[0]).toUpperCase() + str[i].slice(1)
    }
   
    return str;
}
console.log(upperCase(["hEllo","gUVi","teaM"]));



// 2c. Sum of all numbers in an array
var sum = 0;
var a =(arr)=>{
for(var i=0;i<arr.length;i++){
 sum = sum+arr[i];
}
return sum;
}
console.log(a([3,4,8,6,12,15,121,14,139]))



// 2d. Return all the prime numbers in an array
var prime = [];

var isprime =(item)=>{
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



// 2e. Return all the palindromes in an array
var isPalindrome = (s) => {
    var a = s;
    s = s.split('').reverse().join('');
    return s == a;
}

var PalindromicStrings = (arr,N) => {
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