//task1
let i = 1;
const arr1 = []

function recArr(arr) {
  arr1.push(arr[i])
  i++
  if (i === arr.length) {
    return
  }
  recArr(arr)
  return arr1
}
console.log(recArr([1, 2, 3]))
//task2
let arr1 = [];
let i = 0;

function recNestedArr(arr) {
  debugger
  if (i === arr.length) {
    return
  }
  if (Array.isArray(arr[i]) === true) {
    arr1 = arr1.concat(arr[i])
  } else {
    arr1.push(arr[i])
  }
  i++
  recNestedArr(arr)
  return arr1
}
console.log(recNestedArr([1, [2, 4, 5], 3]))
//task3
let sum = 0;
let i = 0;

function calcSumDigits(number) {
  if (number % 10 === number) {
    sum += number;
    if (sum % 10 === sum) {
      return
    } else {
      sum = (sum - sum % 10) / 10 + sum % 10;
      return
    }
  }
  let result = number % 10;
  sum += result;
  number = (number - result) / 10
  calcSumDigits(number)
  return sum
}
console.log(calcSumDigits(2145))
//task4
function readStatus(arr) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i].percent)
  }
  arr1.sort()

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr1[i] === arr[j].percent) {
        arr[j].percent += "%";
        arr1[i] = arr[j];
        break
      }
    }
  }
  return arr1
}
console.log(readStatus([{
    book: "Catcher in the Rye&quot",
    readStatus: true,
    percent: 40
  },
  {
    book: "Animal Farm&quot",
    readStatus: true,
    percent: 20
  },
  {
    book: "Solaris&quot",
    readStatus: false,
    percent: 90
  },
  {
    book: "The Fall&quot",
    readStatus: true,
    percent: 50
  },
  {
    book: "White Nights&quot",
    readStatus: false,
    percent: 60
  },
  {
    book: "After Dark&quot",
    readStatus: true,
    percent: 70
  }
]))
