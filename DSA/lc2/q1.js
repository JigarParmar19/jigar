let arr=[1,2,3,4,5]

let target=9;

const pair=(arr, target)=>{
    for(let i=0; i<arr.length; i++)
    {
        for(let j=i+1; j<arr.length; j++)
        {
            if(arr[i]+arr[j]==target)
            {
                return[i,j];
            }
        }
    }
    return[-1,-1];
}
console.log(pair(arr,target));