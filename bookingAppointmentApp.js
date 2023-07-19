 document.addEventListener("DOMContentLoaded", fetchFromDatabase);


function fetchFromDatabase() {
  axios
    .get("http://localhost:3000/user/get-users")
    .then((response) => {
     for(var i=0;i<response.data.allUsers.length;i++){
           showUserDetails(response.data.allUsers[i])
     }
      })
      .catch((err)=>{
        console.log(err);
      })
}


document.getElementById("username").focus();

var submitBtn=document.getElementById("submit");

submitBtn.addEventListener('click',saveToDatabase);

function saveToDatabase(event){
    event.preventDefault();

    const username=document.getElementById("username").value;
    const phonenumber=document.getElementById("phonenumber").value;
    const email=document.getElementById("email").value;
   

    const details={username:username, 
        phonenumber:phonenumber, 
        email:email}

        axios.post("http://localhost:3000/user/add-user",details)
        .then((response)=>{showUserDetails(response.data.newUserDetail)})

        .catch((err)=>console.log(err))
   }

   function showUserDetails(details){

      document.getElementById("username").value="";
    document.getElementById("phonenumber").value="";
    document.getElementById("email").value="";

    var parentEle= document.getElementById("list-items");
    var childEle=document.createElement("li");
    childEle.setAttribute("id","list-item");
    childEle.textContent="Username:"+details.username+"---"+"Phone Number:"+details.phonenumber+"---"+"Email:"+details.email;
    parentEle.appendChild(childEle);


var del =document.createElement("button");
del.textContent="Delete";
del.setAttribute("user-id",details.id);
del.style.backgroundColor="red";
del.addEventListener("click",deleteUser);

function deleteUser(event){
    event.preventDefault();
const userId = event.target.getAttribute("user-id");
    axios.delete(`http://localhost:3000/user/delete-user/${userId}`)
    .then((response)=>{
      console.log(response);
        
    })

    .catch((err) => console.log(err));
   parentEle.removeChild(childEle);
}
childEle.appendChild(del);


}