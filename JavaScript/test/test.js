let users=[]
const uimaker=()=>{
    document.getElementById('table').innerHTML='';
    users.map((lee,i)=>{
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerHTML=lee.name;
        let td2=document.createElement("td");
        td2.innerHTML=lee.role;
        let td3=document.createElement("td");
        td3.innerHTML=lee.department;
        let td4=document.createElement("td");
        td4.innerHTML=lee.salary;
        let td5=document.createElement("td");
        td5.innerHTML=lee.years;
        let td6=document.createElement("td");
        td6.innerHTML=lee.email;
        let td7=document.createElement("td");
        td7.innerHTML="Delete"
        td7.addEventListener("click",()=>{
            users.splice(i,1)
            uimaker()
        })
        td7.setAttribute("id","del")
        let td8=document.createElement("td");
        if(lee.years>5){
            td8.innerHTML="senior"
        }
        else{
            td8.innerHTML="junior"
        }
        tr.append(td1,td2,td3,td4,td5,td6,td8,td7,);
        document.getElementById('table').append(tr) })}
const calc=(e)=>{
    e.preventDefault();
    let user ={
        name:document.getElementById('name').value,
        role:document.getElementById('role').value,
        department:document.getElementById('department').value,
        salary:document.getElementById('salary').value,
        years:document.getElementById('years').value,
        email:document.getElementById('email').value
    }
    users.push(user)
    uimaker()
}
document.getElementById('data').addEventListener('submit',calc);

document.getElementById("data").addEventListener("submit", calc);
document.getElementById("fireall").addEventListener("click",()=>{
    document.getElementById("table").innerHTML = ""
    users=[]
})

