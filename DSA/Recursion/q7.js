const countString=(count,letter)=>{

    let count = 0;

    for(let i=0;i<str.length;i++){
        
        if(str.charAt(i)==letter){

            count += 1;
    }
  }
    return count;
}

const str="hello";
const leter="ll";

result = countString(str ,leter);

console.log(result);
