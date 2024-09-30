let arr=[2,3,1,2,4,3];
let s=7;

const findmin=(arr)=>{
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

let min=arr.length


    for(let i=0;i<arr.length;i++)
    {
        let SubArray=[];
        
        for(let j=i;j<arr.length;j++)
        {
            SubArray.push(arr[j]);

            let currSum=findmin(SubArray)
 
            if(currSum==s)
            {
                let crLength = SubArray.length
 
                if(crLength<min)
                {
                    min = crLength;
                }
            }
        }
    } 
    
console.log(min);




 