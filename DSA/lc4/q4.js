let arr = [1, 4, 20, 3, 10, 5];
let sum = 33;

const subarraySum=(arr, sum)=> {
    for (let i = 0; i < arr.length; i++) 
        {
           let currsum = 0;
             for (let j = i; j < arr.length; j++) 
             {
                 currsum += arr[j];
                 if (currsum == sum) 
                {
                return true;
                }
             }
        }
    return false;
}
console.log(subarraySum(arr, sum)); 