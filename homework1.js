//task 1
function shallowCompare(obj1, obj2) {
    for (let key in obj1) {
      if (obj1[key] === obj2[key] && Object.keys(obj1).length === Object.keys(obj2).length) {
        return true;
      }
    }
    return false;
  }
  let a = {
    b: 2
  };
  let b = {
    a: 2,
  
  };
  console.log(shallowCompare(a, b))
  //task 2
  function isIsogram(str) {
    let result = "word is not isogram"
    const arr1 = str.split("-").join("").split("");
    for (let i = 0; i < arr1.length; i++) {
      for (let j = i + 1; j <= arr1.length; j++) {
        if (arr1[i] === arr1[j]) {
          result = "word is a isogram"
        }
      }
    }
    return result
  }
  console.log(isIsogram("sgjcsatpp"))
  
  // task 3
  function printFibonacci(n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
      arr.push(arr[i])
    }
    return arr[n]
  }
  console.log(printFibonacci(20))
  //task4
  function calcnum(num) {
  let result="Cannot calculate.";
  debugger
  if (num===0){
  return result
  }
  let sum=0;
  let product=1;
  while(num!==0){
  sum+=num%10;
  product*=num%10;
  num=(num-num%10)/10;
  }
  if(product%sum === 0){
  result=`‘Quotient is ${product/sum}`
  }else{
  result=`‘Remainder is ${product%sum}`
  }
  return result
  }
  console.log(calcnum(0))
  