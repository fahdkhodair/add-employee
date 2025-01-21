document.getElementById("form").addEventListener('click',function(event){
event.preventDefault();
const error=document.querySelectorAll(".error-message")
error.forEach(el=> el.style.display='none')
const name=document.getElementById("Name").value.trim();
const job=document.getElementById("job").value.trim();
const phone=document.getElementById("phone").value.trim();
const email=document.getElementById("email").value.trim();
if(name===""||job===""||phone===""||email===""){
   alert("the form is opened")
}
})
// create-Element-div
function newaddEmployee(){
    let employeeinformation = document.createElement("div");
    employeeinformation.classList.add('employee');
    employeeinformation.innerHTML = `
        <h3 class="employee-name">Name:</h3>
        <p class="employee-job">job:</p>
        <p class="employee-phone">Phone :</p>
        <p class="employee-Email">Email:</p>
        <button class="deleteBtn">Delete</button>
        <button class="renameBtn">Rename</button>
    `;
    document.getElementById("employee-list").appendChild(employeeinformation);
    employeeinformation.querySelector(".deleteBtn").addEventListener('click', function() {
        employeeinformation.remove();  
    });
    employeeinformation.querySelector(".renameBtn").addEventListener('click', function() {
        let newname = prompt('Enter New name');
        let job=prompt('enter your job');
        let phone=prompt('enter your phone');
        let Email=prompt('enter your email')
        if (newname !== null && newname !== "") {
            employeeinformation.querySelector(".employee-name").textContent = 'Name: ' + newname;
        }if(job!==null&&job!==""){
            employeeinformation.querySelector(".employee-job").textContent='job: '+job;
        }if(phone!==null&&phone!==""){
            employeeinformation.querySelector(".employee-phone").textContent='phone: '+phone;
        }if(Email!==null&&Email!==""){
            employeeinformation.querySelector(".employee-Email").textContent='Email: '+Email;
        }
    });
}