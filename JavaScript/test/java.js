let users = []

const uimaker = () => {

    document.getElementById("tbody").innerHTML = "";
    users.map ((ele,i) => {
         
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = ele.name;

        let td2 = document.createElement('td')
        td2.innerHTML = ele.job;

        let td3 = document.createElement('td')
        td3.innerHTML = ele.department;

        let td4 = document.createElement('td')
        td4.innerHTML = ele.salary;

        let td5 = document.createElement('td')
        td5.innerHTML = ele.experience;

        let td6 = document.createElement('td')
        td6.innerHTML = ele.email;

        let td7 = document.createElement('td')
        td7.innerHTML =  "Delete"

        td7.addEventListener("click", () =>{
            users.splice(i,1)
            uimaker()
        })
    
     
        tr.append(td1, td2, td3, td5, td6, td4, td7)

        document.getElementById("tbody").append(tr)

    })
}
   const handleSubmit = (e) => {
       e.preventDefault();

       let data = {
          name: document.getElementById('name').value,
          job: document.getElementById('job').value,
          department: document.getElementById('department').value,
          salary: document.getElementById('salary').value,
          experience: document.getElementById('wrok').value,
          email: document.getElementById('email').value
       }

       users.push(data)
       uimaker()
   }
       
    document.getElementById("data").addEventListener("submit", handleSubmit)

    document.getElementById("fire").addEventListener("click", () => {
        document.getElementById("tbody").innerHTML = ""
        users = []
        
    })