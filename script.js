function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">X</button>`;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
