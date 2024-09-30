const findsum=(arr,n)=>{

       if(n<=0){
        return 0;
       }
       return (findsum(arr,n-1) + arr[n-1]);

}

let arr= [1,2,3];

let n= arr.length;

console.log(findsum(arr,n));
