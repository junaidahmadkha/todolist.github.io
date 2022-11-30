const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")
item.addEventListener(
    "keyup",
    function(event) {
     if (event.key == "Enter") {
        addToDo(this.value)
        this.value = ""
     }
    }
)
const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = '
            ${item}
    <span class="space">X</span>
    '; 
    todobox.appendChild(listItem)
}