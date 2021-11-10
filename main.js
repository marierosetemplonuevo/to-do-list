(function() {
  const list = document.getElementById("list");
  const addBtn = document.getElementById("addBtn");
  const itemInput = document.getElementById("itemInput");

  addBtn.addEventListener("click", e => {
    const value = itemInput.value.trim();

    if (value.length > 0) {
      const li = document.createElement("li");
      const toDo = document.createElement("p");
      toDo.innerHTML = value;
      const del = document.createElement("span");
      del.className = "delete fa fa-trash fa-2x fa-align-center";

      li.appendChild(toDo);
      li.appendChild(del);
      list.appendChild(li);

      itemInput.value = "";

      del.addEventListener("click", () => {
        li.remove();
      });
    }
  });

  // for (let i = 0; i <= deleteBtns.length; i++) {
  //   deleteBtns[i].onclick = function del(this) {
  //     var delParent;
  //     delParent.getParent(deleteBtns);
  //     console.log(delParent);
  //   };
  // }
})();
