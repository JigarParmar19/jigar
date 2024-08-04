let arr=[1,2,3]
let arr1=[4,5,6]

const maraj=(arr,arr1)=>{
             
    let arr2=[]

      for(let i=0;i<arr.length;i++)
      {
        arr2.push(arr[i]);
        if(arr[i]==arr1.length)
        {
            for(let j=0;j<arr.length;j++)
            {
                arr2.push(arr1[j]);
            }
        }
      }
      return arr2;
}
 console.log(maraj(arr,arr1));
 
