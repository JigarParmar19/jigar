let arr=[2,3,-2,4];

const max=(num)=>{
    let maxproduct= num[0];
    let result= num[0];

    for(let i=1; i<num.length; i++)
    {
      if( num[i] > maxproduct*num[i])
       {
        maxproduct= num[i];
       }
       else{
        maxproduct*= num[i];
       }
       if(maxproduct > result)
       {
        result= maxproduct;
       }
    }
    return result;
}

console.log(max(arr));
