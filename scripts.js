let responseBox = document.querySelector(".response-box");
let taskInput = document.querySelector("#taskInput");
let tasksTable = document.querySelector(".tasksTable");
let tasksList = [];

function addTask() {
    if( taskInput.value !== '' ) {
        tasksList.push(taskInput.value);
        taskInput.value = '';
        showTasks( );
    } else {
        responseBox.innerHTML = `preencha o nome da tarefa`;
    }
}

function showTasks() {
    tasksTable.innerHTML = '';

    for( let i = 0; i < tasksList.length; i++ ) {
        tasksTable.innerHTML += `<div class="row mt-3"> <h3> ${tasksList[i]} </h3> </div>`;
    }
}   