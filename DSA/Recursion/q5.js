const sumofDigits=(num)=>{

    let numstr=num.toString();
    let sum = 0;

    for (let digit of numstr){
        sum += parseInt(digit);
    }
    
    return sum;
}

console.log(sumofDigits(153)); 