const sumofarr=(arr)=>{
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let arr = [-2,1,-3,4,-1,2,1,-5,4];

let max = 0;

for(let i=0; i<arr.length; i++){
    let subarr=[]

    for(let j=i; j<arr.length; j++){
        subarr.push(arr[j]);
        let crsum = sumofarr(subarr);

        if(crsum > max){
            max = crsum;
        }
    
}
}
console.log(max);

// Expected Output:6
