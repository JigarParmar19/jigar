let arr=[3, 7, 1, 9, 2]
let minum=arr[0]
const minumarr=(arr)=>{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<minum)
        {
            minum=arr[i];
        }
    }
    return minum;
}

console.log(minumarr(arr));