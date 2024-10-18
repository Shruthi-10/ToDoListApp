const addTask = function () {
    let getValue = document.getElementById("taskInput").value;
    let newListItem = document.createElement("li");
    newListItem.textContent = getValue;

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove Task";
    newListItem.appendChild(removeButton);

    let taskList = document.getElementById("task_list");
    taskList.appendChild(newListItem);
    document.getElementById("taskInput").value = "";

    removeButton.addEventListener("click", function (){
    taskList.removeChild(newListItem);

});
};

const taskButton = document.getElementById("addTaskButton");
taskButton.addEventListener("click", addTask);