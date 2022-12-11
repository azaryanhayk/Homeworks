//task1

function findindexsort(arr) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] > arr[i + 1]) {
        return i + 1
      }
      i += 1;
    }
    return -1
  }
  console.log(findindexsort([-9, -4, -4, 3, 12, 4, 5]))
  //task2
  function findsumrow(arr) {
    const arr1 = arr.map(function(val) {
      return val.reduce(function(aggr, val) {
        return aggr + val
      })
    })
  
    return arr1
  }
  console.log(findsumrow([
    [3, 4, 5],
    [1, 0, 0],
    [4, 5, 4],
    [8, 8, -1]
  ]))
  //task3
  function oddevenarray(arr) {
    const arr1 = arr.filter(function(val) {
      return val % 2 !== 0
    });
    const arr2 = arr1.map(function(val) {
      return val * arr1.length
    })
    return arr2
  }
  console.log(oddevenarray([5, 4, 78, 0, -3, 7]))
  //task4
  function spacedarray(num1, num2, step) {
    const arr = [num1];
    while (num1 + step < num2) {
      arr.push(num1 + step)
      num1 += step;
    }
    return arr
  }
  console.log(spacedarray(1, 5, 0.5))
  