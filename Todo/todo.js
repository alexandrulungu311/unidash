const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");


let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];


function save() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}


function render() {
  list.innerHTML = "";
  tasks.forEach(function (task, index) {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.done) li.classList.add("done");

    
    li.addEventListener("click", function () {
      tasks[index].done = !tasks[index].done;
      save();
      render();
    });

    
    const del = document.createElement("button");
    del.textContent = "Șterge";
    del.addEventListener("click", function (e) {
      e.stopPropagation();
      tasks.splice(index, 1);
      save();
      render();
    });

    li.appendChild(del);
    list.appendChild(li);
  });
}


addBtn.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") return;
  tasks.push({ text: text, done: false });
  input.value = "";
  save();
  render();
});

render();