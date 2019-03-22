var newToDo = document.getElementById("newToDo");
var toDoList = document.getElementById("toDoList");
newItem = () =>{
  let li = null;
  if (newToDo.value) {
    li = document.createElement("li");
    li.appendChild(document.createTextNode(newToDo.value));
    let bt = document.createElement("Button");
    bt.innerHTML = 'Delete';
    li.appendChild(bt);
    bt.addEventListener("click", function(){
      if ( confirm("Are you sure ?")) {
        setTimeout(() =>{this.parentNode.parentNode.removeChild(this.parentNode)},1000);
      }
    })
  }
  if (li) {
    setTimeout(() =>{toDoList.appendChild(li)},1000);
  }
}