document.addEventListener("DOMContentLoaded", fetchFromDatabase);
document.getElementById("toDoName").focus();

var addItemBtn=document.getElementById("addItem");

addItemBtn.addEventListener('click',saveToDatabase);

function saveToDatabase(event){
    event.preventDefault();

    const toDoName=document.getElementById("toDoName").value;
    const description=document.getElementById("description").value;

    const details={toDoName:toDoName, 
        description:description, 
        }

        axios.post('http://localhost:3000/toDo/add-toDo',details)
        .then((response)=>{showToDoDetails(response.data.newToDoDetail)})

        .catch((err)=>console.log(err))
   }


function fetchFromDatabase() {
  axios
    .get("http://localhost:3000/toDo/get-toDos")
    .then((response) => {
      for (var i = 0; i < response.data.allToDos.length; i++) {
        showToDoDetails(response.data.allToDos[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });


     axios
    .get("http://localhost:3000/toDo/fetchToDosDone")
    .then((response) => {
      for (var i = 0; i < response.data.allToDosDone.length; i++) {
        showToDosDoneDetails(response.data.allToDosDone[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}


function showToDosDoneDetails(details) {
      var parentEle2 = document.getElementById("list-items2");
      var childEle2 = document.createElement("li");
      childEle2.setAttribute("id", "list-item2");
      childEle2.textContent=`ToDo Name : ${details.toDoName}        Description: ${details.description}`;
      parentEle2.appendChild(childEle2);
}


   function showToDoDetails(details){

    document.getElementById("toDoName").value="";
    document.getElementById("description").value="";

    var parentEle1= document.getElementById("list-items1");
    var childEle1=document.createElement("li");
    childEle1.setAttribute("id","list-item1");
    childEle1.textContent=`ToDo Name : ${details.toDoName}        Description : ${details.description}`;
    parentEle1.appendChild(childEle1);


var tickBtn=document.createElement("button");
tickBtn.textContent="\u2713";
tickBtn.setAttribute("toDo-id",details.id);
tickBtn.style.backgroundColor="green";
tickBtn.addEventListener("click",tick)

var parentEle2 = document.getElementById("list-items2");
      var childEle2 = document.createElement("li");
      childEle2.setAttribute("id", "list-item2");
      

function tick(event){
  event.preventDefault();
   const toDoId = event.target.getAttribute("toDo-id");
    axios
    .post('http://localhost:3000/toDo/tick-toDo',{ id: toDoId })
    .then((response) => {
      parentEle1.removeChild(childEle1);
      childEle2.textContent=`ToDo Name : ${details.toDoName}        Description : ${details.description}`;
      parentEle2.appendChild(childEle2);
     })
    .catch((err) => console.log(err));
   }
childEle1.appendChild(tickBtn);

  
var delBtn =document.createElement("button");
delBtn.textContent="\u2717";
delBtn.setAttribute("toDo-id",details.id);
delBtn.style.backgroundColor="red";
delBtn.addEventListener("click",deleteToDo);

function deleteToDo(event){
    event.preventDefault();
   const toDoId = event.target.getAttribute("toDo-id");
  axios
    .delete(`http://localhost:3000/toDo/delete-toDo/${toDoId}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
  parentEle1.removeChild(childEle1); 
}
childEle1.appendChild(delBtn); 
}