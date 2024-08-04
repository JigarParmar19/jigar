let arr=[1,1,2]

let arr1=[]

for(let i=0; i<arr.length;i++)
{
    if(!(arr1.includes(arr[i])))
    {
        arr1.push(arr[i])
    }
}

console.log(arr1);
