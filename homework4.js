//task 1
function pairProduct(arr){
    let result=0;
    arr.forEach(function (val,i){
    if(val*arr[i+1]>result){
    result=val*arr[i+1]
    }
    })
    return result
    }
    console.log(pairProduct([1,5,6,4,8]))
    //task2
    function missingNumbers(arr){
    const min=Math.min(...arr);
    const max=Math.max(...arr);
    const result=max-min-arr.length+1;
    return result
    }
    console.log(missingNumbers([6,9,7,0]))
    //task3
    //task4
    function NprimeNumber(n){
    
    let result=0;
    let num=1;
    for(;num<Infinity;num++){
    if(num===1 ||num===2||num===3||num===5||num===7){
    result++;
    }else if(num%2!==0 &&num%3!==0 &&num%5!==0 && num%7!==0){
    result++;
    }
    if(result===n){
    return num
    }
    }
    
    }
    console.log(NprimeNumber(50))