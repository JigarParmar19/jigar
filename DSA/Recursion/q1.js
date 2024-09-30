const factorial=(num)=>{
       
     if(num>1){
        return num*factorial(num-1);
     }
     else{
        return 1;
     }
}
let n=3;

let N=factorial(n);

console.log(factorial(n));




