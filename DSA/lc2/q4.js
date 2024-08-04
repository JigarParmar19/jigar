let string="Jigar"
 
const reverse=(string)=>{
   let arr=[]

   for(let i=string.length-1; i>=0; i--)
   {
       arr.push(string[i])
   }
   return arr
}

console.log(reverse(string));
