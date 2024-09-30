let arr=[1,-1,5,-2,3];
let k=3;

const findSum=(arr)=>{
    let sum=0;
    for(let ele of arr){
        sum+=ele
    }
    return sum;
}

let maxLength=0

const generateSubArray=(arr)=>{

    for(let i=0;i<arr.length;i++)
    {
        let SubArray=[];
        
        for(let j=i;j<arr.length;j++)
        {
            SubArray.push(arr[j]);

            let currSum = findSum(SubArray)

            if(currSum==k)
            {
                let crLength = SubArray.length

                if(crLength>maxLength)
                {
                    maxLength = crLength;
                }
            }
        }
    } 
}

generateSubArray(arr);

console.log(maxLength);