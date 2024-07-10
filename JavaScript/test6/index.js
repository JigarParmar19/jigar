let arr=JSON.parse(localStorage.getItem("books"))||[]


document.getElementById("from").addEventListener("submit", (e)=>{
    e.preventDefault();
let from={
bookname:document.getElementById("Bookname").value,
author:document.getElementById("autorname").value,
description:document.getElementById("description").value,
date:document.getElementById("date").value,
category:document.getElementById("category").value,
prise:document.getElementById("payasa").value,
}

arr.push(from);
localStorage.setItem("books",JSON.stringify(arr))
})
