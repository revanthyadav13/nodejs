 document.addEventListener("DOMContentLoaded", fetchFromDatabase);


function fetchFromDatabase() {
  axios
    .get("http://localhost:3000/stock/get-stocks")
    .then((response) => {
     for(var i=0;i<response.data.allStocks.length;i++){
           showStockDetails(response.data.allStocks[i])
     }
      })
      .catch((err)=>{
        console.log(err);
      })
}


document.getElementById("candyname").focus();

var addItemBtn=document.getElementById("addItem");

addItemBtn.addEventListener('click',saveToDatabase);

function saveToDatabase(event){
    event.preventDefault();

    const candyname=document.getElementById("candyname").value;
    const description=document.getElementById("description").value;
    const price=document.getElementById("price").value;
    const quantity=document.getElementById("quantity").value;

    const details={candyname:candyname, 
        description:description, 
        price:price,
        quantity:quantity}

        axios.post('http://localhost:3000/stock/add-stock',details)
        .then((response)=>{showStockDetails(response.data.newStockDetail)})

        .catch((err)=>console.log(err))
   }


   function showStockDetails(details){

    document.getElementById("candyname").value="";
    document.getElementById("description").value="";
    document.getElementById("price").value="";
    document.getElementById("quantity").value="";


    var parentEle= document.getElementById("list-items");
    var childEle=document.createElement("li");
    childEle.setAttribute("id","list-item");
    childEle.textContent="Candy Name:"+details.candyname+"---"+"Description:"+details.description+"---"+"Price:"+details.price+"---"+"Quantity:"+details.quantity;
    parentEle.appendChild(childEle);


var editBtn=document.createElement("button");
editBtn.textContent="Edit";
editBtn.setAttribute("user-id",details.id);
editBtn.style.backgroundColor="yellow"
editBtn.addEventListener("click",editing)

function editing(event){
    event.preventDefault();
    const userId = event.target.getAttribute("user-id");

     axios
     .post(`http://localhost:3000/stock/edit-stock/${userId}`)
     .then((response) => {
      const stockItem = response.data.stockItem;
      if (!stockItem) {
        console.log("Stock item not found.");
        return;
      }
      document.getElementById("candyname").value = stockItem.candyname;
      document.getElementById("description").value = stockItem.description;
      document.getElementById("price").value = stockItem.price;
      document.getElementById("quantity").value = stockItem.quantity;

      deleteStock(event,userId);
     })
    .catch(err => console.log(err));
}
childEle.appendChild(editBtn);

  
var buyOne=document.createElement("button");
buyOne.textContent="Buy 1";
buyOne.setAttribute("user-id",details.id);
buyOne.style.backgroundColor="green"
buyOne.addEventListener("click",buyingOne)
userIdToUpdate = details.id;

function buyingOne(event){
    event.preventDefault();
    const userId = event.target.getAttribute("user-id");
     axios
    .put(
      `http://localhost:3000/stock/update-stock/${userId}`,{quantity: details.quantity - 1})
       .then((response)=>{
        console.log(response);
    })
    .catch(err => console.log(err));
}
childEle.appendChild(buyOne);


var buyTwo=document.createElement("button");
buyTwo.textContent="Buy 2";
buyTwo.setAttribute("user-id",details.id);
buyTwo.style.backgroundColor="green";
buyTwo.addEventListener("click",buyingTwo);

function buyingTwo(event){
    event.preventDefault();
    const userId = event.target.getAttribute("user-id");
     axios.put(`http://localhost:3000/stock/update-stock/${userId}`,{quantity: details.quantity - 2})
      .then((response)=>{
        console.log(response);
    })
    .catch(err => console.log(err));
}
childEle.appendChild(buyTwo);


var buyThree=document.createElement("button");
buyThree.textContent="Buy 3";
buyThree.setAttribute("user-id",details.id);
buyThree.style.backgroundColor="green";
buyThree.addEventListener("click",buyingThree);

function buyingThree(event){
    event.preventDefault();
    const userId = event.target.getAttribute("user-id");
     axios.put(`http://localhost:3000/stock/update-stock/${userId}`,{quantity: details.quantity - 3})
      .then((response)=>{
        console.log(response);
    })
    .catch(err => console.log(err));
}
childEle.appendChild(buyThree);


var del =document.createElement("button");
del.textContent="Delete";
del.setAttribute("user-id",details.id);
del.style.backgroundColor="red";
del.addEventListener("click",deleteStock);

function deleteStock(event,userId){
    event.preventDefault();
 userId = event.target.getAttribute("user-id");
    axios.delete(`http://localhost:3000/stock/delete-stock/${userId}`)
    .then((response)=>{
        console.log(response);
    })
    .catch((err) => console.log(err));
  parentEle.removeChild(childEle);
}
childEle.appendChild(del);


}