(function() {
  const list = document.getElementById("list");
  const addBtn = document.getElementById("addBtn");
  const itemInput = document.getElementById("itemInput");
  const deleteBtns = document.getElementsByTagName("button");

  addBtn.addEventListener("click", e => {
    e.preventDefault();
    const value = itemInput.value;
    const li = document.createElement("li");
    const toDo = document.createElement("p");
    toDo.innerHTML = value;
    const del = document.createElement("span");
    del.className = "delete fa fa-trash fa-2x fa-align-center";

    li.appendChild(toDo);
    li.appendChild(del);
    list.appendChild(li);
  });

  for (let i = 0; i <= deleteBtns.length; i++) {
    deleteBtns[i].onclick = () => {
      function del(this) {
        var delParent;
        delParent.getParent(deleteBtns);
        console.log(delParent);
      }
    };
  }
})();
