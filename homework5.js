
function readStatus(arr){
    const arr1=[];
    for(let i=0;i<arr.length;i++){
    arr1.push(arr[i].percent)
    }
    arr1.sort()
    
    for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
    if(arr1[i]===arr[j].percent){
    arr[j].percent+="%";
    arr1[i]=arr[j];
    break
    }
    }
    }
    return arr1
    }
    console.log(readStatus([
    { book: "Catcher in the Rye&quot", readStatus: true, percent: 40},
    { book: "Animal Farm&quot", readStatus: true, percent: 20},
    { book: "Solaris&quot", readStatus: false, percent: 90 },
    { book: "The Fall&quot", readStatus: true, percent: 50 },
    { book: "White Nights&quot", readStatus: false, percent: 60 } ,
    { book: "After Dark&quot", readStatus: true, percent: 70 }
    ]))
    