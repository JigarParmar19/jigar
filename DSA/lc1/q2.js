let arr=[3, 7, 1, 9, 2]
let larg=arr[0]
const largarr=(arr)=>{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>larg)
        {
            larg=arr[i];
        }
    }
    return larg;
}

console.log(largarr(arr));