let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
function addTask() {
  let text = taskInput.value.trim();
  if (!text) {
    alert("Task cannot be empty!");
    return;
  }

  tasks.push({ title: text, completed: false });
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, i) => {
    let taskItem = document.createElement("div");
    taskItem.className = "task-item";
    
    let span = document.createElement("span");
    span.textContent = task.title;
    if (task.completed) span.style.textDecoration = "line-through";
    let completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    completeBtn.onclick = () => {
      task.completed = !task.completed;
      renderTasks();
    };
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
      let newText = prompt("Edit task:", task.title);
      if (newText) {
        task.title = newText.trim();
        renderTasks();
      }
    };
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      tasks.splice(i, 1);
      renderTasks();
    };

    taskItem.appendChild(span);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(delBtn);
    taskList.appendChild(taskItem);
  });
}