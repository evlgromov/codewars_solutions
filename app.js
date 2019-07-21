/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces. */

/* function getCount(str) {
  var vowelsCount = 0;

  for (var i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      vowelsCount++;
    }
  }

  return vowelsCount;
} */

/* function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
} */

// ---------------------------------------------------------------------------------------------------------------------------------------------

/* We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4]. */

/* function vowelIndices(word) {
    var arr = [];
    for(var i = 0; i < word.length; i++) {
      if(/[aeioyu]/i.test(word[i])) {
        arr.push(i+1);
      }
    }
    return arr;
} */

/* function vowelIndices(str){
    var idx = []
    str = str.toLowerCase()
      for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" ||
          str[i] == "e" ||
          str[i] == "i" ||
          str[i] == "o" ||
          str[i] == "u" ||
          str[i] == "y") {
          idx.push(i + 1)
        }
      }
      return idx
} */

// ---------------------------------------------------------------------------------------------------------------------------------------------

/* // Find and sort unique characters in two arrays

function longest (s1, s2) {
  console.log([... new Set(s1 + s2)].sort().join(''));
}

longest('ghbdnt', 'ghbdtn'); */

// ---------------------------------------------------------------------------------------------------------------------------------------------

/* // Find the unique number in array

function findUniq(arr) {
    let sortArr = arr.sort();
    console.log(sortArr)
    let num1 = sortArr[0];
    let num2 = sortArr[sortArr.length-1];
    
    if (sortArr[1] === num1) {
      return num2;
    } else {
      return num1;
    }
  }
  */

/* function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  } */

/* function findUniq(arr) {
    let [a,b,c] = arr.slice(0,3);
    if( a != b && a!=c ) return a;
    for( let x of arr ) if( x!=a ) return x
  } */

/* function findUniq(arr) {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
  } */

/* function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  } 

  console.log(findUniq([ 0, 0, 0.55, 0, 0 ])); // === 0.55
  console.log(findUniq([  0, 1, 0 ])); // === 1
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // === 2
  console.log(findUniq([ 3, 10, 3, 3, 3 ])); // === 10 */

// ---------------------------------------------------------------------------------------------------------------------------------------------

//  You get an array of numbers, return the sum of all of the positives ones.

/* function possitiveSum (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
} */

/* function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
} */

/* function positiveSum (arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}

console.log(possitiveSum([1,-4,7,12])); */

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Can you find the needle in the haystack?

/* function findNeedle(haystack) {
    var idx = haystack.indexOf('needle');
    console.log('Found the needle at position ' + idx);
  }

  findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]); */

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

/* function list(names) {
    var str = "";
    var separator;
    for(var i = 0; i < names.length; i++) {
        if (i == names.length - 2) {
            separator = ' & ';
        } else if (i < names.length - 1) {
            separator = ', ';
        } else {
            separator = '';
        }
        str += names[i].name + separator;
    }
    console.log(str);
} */

/* function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
} */

/* function list(names) {
  var xs = names.map(p => p.name)
    var x = xs.pop()
    return xs.length ? xs.join(", ") + " & " + x : x || ""
} */

//list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]);

// ---------------------------------------------------------------------------------------------------------------------------------------------

/* function minMax (arr) {
  var min = arr[0];
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log([min, max]);
} */

/* function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
} */

/* function minMax(arr){
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
} */

/* function minMax(arr) {
  var a = arr.sort(function(a,b) {return a-b});
  return [a[0], a[a.length-1]];
} */

// minMax([1,2,3,4,5]);

// ---------------------------------------------------------------------------------------------------------------------------------------------

/* You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1.

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
 */

// function mxdiflg(a1, a2) {
//   console.log(max(a1) - max(a2))
// }

/* function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  let l1 = a1.map(str => str.length)
  let l2 = a2.map(str => str.length)
  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
} */

/* function mxdiflg(a1, a2) {
  var max = -1;
  for(var A1 of a1)
    for(var A2 of a2)
      max = Math.max(max, Math.abs(A1.length - A2.length));
  return max;
} */

/* function mxdiflg(a1, a2) {
  if(!a1.length||!a2.length)return -1;
  a1.sort((a,b)=>a.length-b.length);
  a2.sort((a,b)=>a.length-b.length)
  return Math.max(Math.abs(a1[0].length-a2[a2.length-1].length),Math.abs(a2[0].length-a1[a1.length-1].length));
} */

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception

/* function factorial(n)
{
    if (n < 0 || n > 12) {
        throw RangeError('>0 || <12')
    }
    if (n < 2) return 1;
    for (let i = 2; i <= n; i++) {
        return n * factorial(n - 1)
    }
    return n
} */

/* function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
  }

console.log(factorial(-1)) */

// ---------------------------------------------------------------------------------------------------------------------------------------------

/* A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is stricty greater than the window parameter.

Example:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
 */

/* function bouncingBall(h,  bounce,  window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
}


function bouncingBall(h,  bounce,  window) {
    if( h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
    let seen = 0;
    
    while(h > window){
      seen += 1
      h *= bounce
      if(h > window) seen += 1
    }
    
    return seen;
}


function bouncingBall(h, b, w) {
    if (h <= w || b >= 1) return -1;
    let r = Math.floor(Math.log(w/h)/Math.log(b)) * 2 + 1;
    if (Number.isNaN(r)) return -1;
    return r;
}


function bouncingBall(h,  bounce,  window) {
    if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h){
      return -1;
    }
  
    var newHeight = h * bounce;
    return bouncingBall(newHeight, bounce, window) + 2;
} */

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Округлить число до ближайшего кратного 5

/* function roundTo5(num) {
    return Math.ceil(num/5)*5;
}

console.log(roundTo5(1)) */

// ---------------------------------------------------------------------------------------------------------------------------------------------

/* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z. */

/* function printerError(s) {
    var x = []
    var arr = [...s].sort()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 'm') {
            x.push(arr[i]) 
        }    
    }
    return x.length + '/' + arr.length
}

function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}

function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
} */

// ---------------------------------------------------------------------------------------------------------------------------------------------

/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
 */

/* function getMaxSum(arr) {
  var currentSum = 0;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
      currentSum += arr[i];
      sum = Math.max(sum, currentSum);
      if (currentSum < 0) currentSum = 0;
  }
  return sum;
} */

/* var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  } */

/* var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
} */

/* var maxSequence = function(arr){
    var max = 0;
    var cur = 0;
    arr.forEach(function(i){
      cur = Math.max(0, cur + i);
      max = Math.max(max, cur);
    });
    return max;
} */

/* function maxSequence(arr) {
    var max = 0
    
    for (var i = 0; i < arr.length; i++) {
      for (var sum = 0, j = i; j < arr.length; j++) {
        sum += arr[j]
        if (sum > max) max = sum
      }
    }
    
    return max
  } */
